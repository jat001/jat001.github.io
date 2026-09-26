import type Hexo from 'hexo'

interface Named {
  name: string
}

// Hexo's warehouse internals this relies on, which its typings don't expose.
interface Model<T> {
  data: Record<string, T | null>
  dirty: boolean
  find(query: object): { toArray(): T[] }
  Query: new (docs: T[]) => unknown
  schema: {
    path(name: string): { get(fn: (this: { _id: string }) => unknown): void }
  }
}

// Tags and categories are created while posts are processed concurrently, so
// their order (which post.tags, the sitemap and listings follow) changes
// between builds. Sort them by name, comparing code points to stay
// locale-independent.
const byName = (a: Named, b: Named): number =>
  a.name < b.name ? -1 : a.name > b.name ? 1 : 0

export default (hexo: Hexo): void => {
  const model = <T>(name: string) => hexo.model(name) as unknown as Model<T>

  // Hexo caches post.tags internally, so sort in the getter itself.
  model('Post')
    .schema.path('tags')
    .get(function () {
      const Tag = model<Named & { _id: string }>('Tag')
      const ids = model<{ tag_id: string }>('PostTag')
        .find({ post_id: this._id })
        .toArray()
        .map((item) => item.tag_id)
      return new Tag.Query(
        Tag.find({ _id: { $in: ids } })
          .toArray()
          .sort(byName),
      )
    })

  hexo.extend.filter.register('before_generate', () => {
    for (const name of ['Tag', 'Category']) {
      const m = model<Named>(name)
      const data = { ...m.data }
      const ids = Object.keys(data)
        .filter((id) => data[id])
        .sort((a, b) => byName(data[a]!, data[b]!))

      for (const id of Object.keys(m.data)) delete m.data[id]
      for (const id of ids) m.data[id] = data[id] ?? null
      m.dirty = true
    }
  })
}
