import type Hexo from 'hexo'

type Helper = (this: unknown, base: string, relative?: string) => string

// Fluid's url_join returns the base unchanged when the relative path is empty,
// so the home page's canonical link loses the trailing slash that every other
// URL has. Join with '/' instead. Wrapped in before_generate to run after the
// theme registers its helper.
export default (hexo: Hexo): void => {
  let original: Helper | undefined

  hexo.extend.filter.register('before_generate', () => {
    original ??= hexo.extend.helper.get('url_join') as Helper | undefined
    if (!original) throw new Error('url_join helper not found')

    const join = original
    hexo.extend.helper.register('url_join', function (base, relative) {
      return join.call(this, base, relative || '/')
    } satisfies Helper)
  })
}
