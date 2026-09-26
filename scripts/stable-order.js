// Tags and categories are created while posts are processed concurrently, so
// their order (which post.tags, the sitemap and listings follow) changes
// between builds. Sort them by name, comparing code points to stay
// locale-independent.
const byName = (a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0)

// Hexo caches post.tags internally, so sort in the getter itself.
hexo.model('Post').schema.path('tags').get(function () {
  const Tag = hexo.model('Tag')
  const ids = hexo.model('PostTag').find({ post_id: this._id }).map((item) => item.tag_id)
  return new Tag.Query(Tag.find({ _id: { $in: ids } }).toArray().sort(byName))
})

hexo.extend.filter.register('before_generate', function () {
  for (const name of ['Tag', 'Category']) {
    const model = this.model(name)
    const data = { ...model.data }
    const ids = Object.keys(data)
      .filter((id) => data[id])
      .sort((a, b) => byName(data[a], data[b]))

    for (const id of Object.keys(model.data)) delete model.data[id]
    for (const id of ids) model.data[id] = data[id]
    model.dirty = true
  }
})
