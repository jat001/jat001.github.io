import type Hexo from 'hexo'

// The category and tag maps are too long for _config.yml, so they live in
// their own files and are merged in here. Category and tag slugs read the maps
// from hexo.config lazily, so this is early enough.
export default (hexo: Hexo): void => {
  for (const key of ['category_map', 'tag_map'] as const) {
    const map = hexo.render.renderSync({
      path: `${hexo.base_dir}${key}.yml`,
    }) as Record<string, string>

    hexo.config[key] = { ...hexo.config[key], ...map }
  }
}
