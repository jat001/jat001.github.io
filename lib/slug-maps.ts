import { readFileSync } from 'node:fs'
import type Hexo from 'hexo'

const maps = { category_map: 'Category', tag_map: 'Tag' } as const

// Each file holds one `name: slug` entry per line, sorted by slug. Parse it line
// by line since a parsed object would reorder integer-like keys such as 2012.
const load = (hexo: Hexo, file: string): Record<string, string> => {
  const map: Record<string, string> = {}
  let prev = ''

  readFileSync(`${hexo.base_dir}${file}`, 'utf8')
    .split(/\r?\n/)
    .forEach((line, i) => {
      if (!line.trim() || line.startsWith('#')) return

      const entry = Object.entries(
        hexo.render.renderSync({ text: line, engine: 'yaml' }) as object,
      )
      const [name, slug] = entry[0] ?? []
      const where = `${file}:${i + 1}`
      if (entry.length !== 1 || typeof slug !== 'string') {
        throw new Error(`${where}: expected a single "name: slug" string entry`)
      }
      if (name in map) throw new Error(`${where}: duplicate name "${name}"`)
      if (slug === prev) throw new Error(`${where}: duplicate slug "${slug}"`)
      if (slug < prev) {
        throw new Error(`${where}: "${slug}" is not sorted after "${prev}"`)
      }

      map[name] = slug
      prev = slug
    })

  return map
}

// The category and tag maps are too long for _config.yml, so they live in
// their own files and are merged in here. Category and tag slugs read the maps
// from hexo.config lazily, so this is early enough.
export default (hexo: Hexo): void => {
  for (const key of Object.keys(maps) as (keyof typeof maps)[]) {
    hexo.config[key] = { ...hexo.config[key], ...load(hexo, `${key}.yml`) }
  }

  // Every category and tag in use needs an English slug, or its URL falls back
  // to the percent-encoded name.
  hexo.extend.filter.register('before_generate', () => {
    const errors = []

    for (const key of Object.keys(maps) as (keyof typeof maps)[]) {
      const docs = hexo
        .model(maps[key])
        .toArray()
        .filter((doc) => doc.posts.length)

      for (const { name } of docs) {
        if (!(name in hexo.config[key])) {
          errors.push(`${key}.yml: missing "${name}"`)
        }
      }
    }

    if (errors.length) throw new Error(errors.join('\n'))
  })
}
