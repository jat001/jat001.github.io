import type Hexo from 'hexo'

const escape = (str: string): string =>
  str.replace(
    /[&<>"']/g,
    (c) =>
      ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&#34;', "'": '&#39;' })[
        c
      ]!,
  )

// Fluid titles the home page with just the site title and has no option for
// the subtitle, so append it to the <title> of the first home page only.
export default (hexo: Hexo): void => {
  hexo.extend.filter.register('after_generate', async () => {
    const { title, subtitle } = hexo.config
    if (!subtitle) return

    const path = 'index.html'
    const chunks: Buffer[] = []
    for await (const chunk of hexo.route.get(path)) {
      chunks.push(Buffer.from(chunk))
    }

    const html = Buffer.concat(chunks).toString()
    const from = `<title>${escape(title)}</title>`
    if (!html.includes(from)) throw new Error(`${path}: ${from} not found`)

    const separator: string = hexo.theme.config.tab_title_separator ?? ' - '
    const to = `<title>${escape(title + separator + subtitle)}</title>`
    hexo.route.set(path, html.replace(from, to))
  })
}
