// Gera sitemap.xml a partir de routes.config.js.
// Roda automaticamente no build da Vercel (ver vercel.json) e pode ser
// chamado manualmente com `npm run build` após adicionar uma página nova.

const fs = require('fs')
const path = require('path')
const { siteUrl, pages, posts } = require('../routes.config.js')

const urls = [
  ...pages.map(p => ({
    loc: siteUrl + p.path,
    lastmod: p.lastmod,
    changefreq: p.changefreq,
    priority: p.priority,
  })),
  ...posts.map(p => ({
    loc: `${siteUrl}/blog/${p.slug}`,
    lastmod: p.date,
    changefreq: p.changefreq || 'monthly',
    priority: p.priority ?? 0.6,
  })),
]

const body = urls
  .map(u => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${u.lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority.toFixed(1)}</priority>
  </url>`)
  .join('\n')

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>
`

fs.writeFileSync(path.join(__dirname, '..', 'sitemap.xml'), xml)
console.log(`sitemap.xml gerado com ${urls.length} URLs.`)
