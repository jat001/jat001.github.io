// Hexo runs every file here as plain JS and only logs a load failure, so load
// the TypeScript sources through Node's type stripping and abort the build if
// any of them fail instead of silently generating a broken site.
for (const name of ['permalink', 'stable-order', 'slug-maps', 'home-title']) {
  try {
    require(`../lib/${name}.ts`).default(hexo)
  } catch (err) {
    hexo.log.fatal({ err }, 'Failed to load lib/%s.ts', name)
    process.exit(1)
  }
}
