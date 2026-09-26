import type Hexo from 'hexo'

type Escape = (str: string) => string

// Fluid titles the home page with just the site title and has no option for
// the subtitle, so add it to the <title> and og:title of the first home page.
export default (hexo: Hexo): void => {
  hexo.extend.filter.register('after_generate', async () => {
    const { title, subtitle } = hexo.config
    if (!subtitle) return

    // hexo-util's escapeHTML, which isn't a direct dependency to import.
    const escape = hexo.extend.helper.get('escape_html') as Escape
    const separator: string = hexo.theme.config.tab_title_separator ?? ' - '
    const full = escape(title + separator + subtitle)

    const path = 'index.html'
    const chunks: Buffer[] = []
    for await (const chunk of hexo.route.get(path)) {
      chunks.push(Buffer.from(chunk))
    }
    let html = Buffer.concat(chunks).toString()

    const tags: [RegExp, string][] = [
      [/<title>[^<]*<\/title>/, `<title>${full}</title>`],
      [
        /<meta property="og:title" content="[^"]*">/,
        `<meta property="og:title" content="${full}">`,
      ],
    ]
    for (const [pattern, tag] of tags) {
      if (!pattern.test(html)) throw new Error(`${path}: ${pattern} not found`)
      // A replacer function, so a `$` in the subtitle is not a special pattern.
      html = html.replace(pattern, () => tag)
    }

    hexo.route.set(path, html)
  })
}
