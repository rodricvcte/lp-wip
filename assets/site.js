// Always start at the top on reload, instead of restoring previous scroll position
if ('scrollRestoration' in history) history.scrollRestoration = 'manual'
window.scrollTo(0, 0)

// Portfolio preview scaling — fixed 1200px emulated page width keeps embedded
// sites above their own mobile breakpoint, regardless of card size on screen
function sizePortfolioPreviews() {
  document.querySelectorAll('.port-viewport').forEach(vp => {
    const scale = vp.offsetWidth / 1200
    vp.querySelector('iframe').style.transform = `scale(${scale})`
  })
}
sizePortfolioPreviews()
window.addEventListener('resize', sizePortfolioPreviews)

// Scroll reveal
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in') })
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' })
document.querySelectorAll('.fade-up,.fade-left,.fade-right').forEach(el => io.observe(el))

// Nav
const nav = document.getElementById('nav')
if (nav) window.addEventListener('scroll', () => nav.classList.toggle('scrolled', scrollY > 50), { passive: true })

// Mobile menu
const ham = document.getElementById('ham'), mob = document.getElementById('mob')
const close = document.getElementById('mob-close')
if (ham && mob && close) {
  const openMob  = () => { mob.classList.add('open'); ham.setAttribute('aria-expanded','true'); document.body.style.overflow='hidden' }
  const closeMob = () => { mob.classList.remove('open'); ham.setAttribute('aria-expanded','false'); document.body.style.overflow='' }
  ham.addEventListener('click', openMob)
  close.addEventListener('click', closeMob)
  document.querySelectorAll('.mob-link').forEach(l => l.addEventListener('click', closeMob))
}

// Smooth scroll (same-page anchors only)
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const t = document.querySelector(a.getAttribute('href'))
    if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth' }) }
  })
})

// WA bubble
const wab = document.getElementById('wab')
if (wab) {
  let shown = false
  const showBubble = () => { if (!shown) { wab.classList.add('show'); shown = true; setTimeout(() => wab.classList.remove('show'), 6000) } }
  setTimeout(showBubble, 4000)
  window.addEventListener('scroll', () => { if (scrollY > 400) showBubble() }, { passive: true, once: true })
}

// Active nav (only sections that exist on the current page)
const secs = document.querySelectorAll('section[id]')
const nls  = document.querySelectorAll('.nav-links a')
secs.forEach(s => new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) nls.forEach(l => {
      l.style.color = l.getAttribute('href') === `#${e.target.id}` ? 'var(--white)' : ''
    })
  })
}, { threshold: .45 }).observe(s))
