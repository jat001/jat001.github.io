import type Hexo from 'hexo'

// Posts before 2023 keep their legacy slug-only URLs, newer ones use the date.
export default (hexo: Hexo): void => {
  hexo.extend.filter.register('post_permalink', (permalink: string): string => {
    const res = /^(20\d{2})\d{4}\/(archive-)?[^/]+(\/index\.html)?/.exec(
      permalink,
    )

    if (res !== null) {
      if (Number(res[1]) < 2023) {
        permalink = permalink.slice(9)
        if (res[2] !== undefined) permalink = permalink.slice(8)
      } else {
        permalink = permalink.slice(0, 8)
        if (res[3] !== undefined) permalink += res[3]
      }
    }

    return permalink
  })
}
