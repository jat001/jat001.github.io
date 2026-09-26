import type Hexo from 'hexo'

type Escape = (str: string) => string

const escapeRegExp = (str: string): string =>
  str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

const read = async (hexo: Hexo, path: string): Promise<string> => {
  const chunks: Buffer[] = []
  for await (const chunk of hexo.route.get(path)) {
    chunks.push(Buffer.from(chunk))
  }
  return Buffer.concat(chunks).toString()
}

// Fluid titles the home pages with just the site title and has no option for
// the subtitle, so add it to the <title> and og:title of every home page,
// including the paginated ones.
export default (hexo: Hexo): void => {
  hexo.extend.filter.register('after_generate', async () => {
    const { title, subtitle, pagination_dir, index_generator } = hexo.config
    if (!subtitle) return

    // hexo-util's escapeHTML, which isn't a direct dependency to import.
    const escape = hexo.extend.helper.get('escape_html') as Escape
    const separator: string = hexo.theme.config.tab_title_separator ?? ' - '
    const full = escape(title + separator + subtitle)
    const tags: [RegExp, string][] = [
      [/<title>[^<]*<\/title>/, `<title>${full}</title>`],
      [
        /<meta property="og:title" content="[^"]*">/,
        `<meta property="og:title" content="${full}">`,
      ],
    ]

    // index.html and page/2/index.html etc. under the home page path.
    const root: string = index_generator?.path ?? ''
    const base = root ? escapeRegExp(root.replace(/\/?$/, '/')) : ''
    const dir = escapeRegExp(pagination_dir)
    const home = new RegExp(`^${base}(${dir}/\\d+/)?index\\.html$`)
    const paths = hexo.route.list().filter((path) => home.test(path))
    if (!paths.length) throw new Error(`no home page matches ${home}`)

    await Promise.all(
      paths.map(async (path) => {
        let html = await read(hexo, path)
        for (const [pattern, tag] of tags) {
          if (!pattern.test(html)) {
            throw new Error(`${path}: ${pattern} not found`)
          }
          // A replacer function, so a `$` in the subtitle isn't special.
          html = html.replace(pattern, () => tag)
        }
        hexo.route.set(path, html)
      }),
    )
  })
}
