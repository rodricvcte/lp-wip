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
    {
      slug: 'quanto-custa-uma-landing-page-para-dentista',
      title: 'Quanto Custa uma Landing Page para Dentista em 2026',
      description: 'O que influencia o preço de uma landing page para dentista, sinais de alerta de preço baixo demais e o que esperar de investimento em 2026.',
      date: '2026-07-20',
      priority: 0.7,
      changefreq: 'monthly',
    },
    {
      slug: 'por-que-meu-consultorio-nao-aparece-no-google',
      title: 'Por Que Meu Consultório Não Aparece no Google? (Guia Completo)',
      description: 'As razões mais comuns pelas quais um consultório odontológico não aparece na busca do Google, e o que de fato ajuda a mudar isso.',
      date: '2026-07-20',
      priority: 0.7,
      changefreq: 'monthly',
    },
  ],
}
