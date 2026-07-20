// Fonte única de verdade das rotas do site — usada por scripts/build-sitemap.js.
// Ao publicar uma página nova (pilar de nicho ou post), adicione uma entrada aqui
// e rode `npm run build` (ou deixe o build da Vercel rodar) para atualizar o sitemap.xml.

module.exports = {
  siteUrl: 'https://www.agenciawip.com.br',

  pages: [
    { path: '/', changefreq: 'weekly', priority: 1.0, lastmod: '2026-07-20' },
    { path: '/landing-page-para-dentista', changefreq: 'monthly', priority: 0.9, lastmod: '2026-07-20' },
    { path: '/blog', changefreq: 'weekly', priority: 0.7, lastmod: '2026-07-20' },
  ],

  // Posts de cluster, servidos em /blog/<slug>
  posts: [
    {
      slug: 'landing-page-para-dentista-exemplos-reais',
      title: 'Landing Page para Dentista: Exemplos Reais e o Que Aprender com Eles',
      description: 'Três landing pages reais entregues pela WIP Digital para dentistas, analisadas ponto a ponto — o que funciona e por quê.',
      date: '2026-07-20',
      priority: 0.7,
      changefreq: 'monthly',
    },
  ],
}
