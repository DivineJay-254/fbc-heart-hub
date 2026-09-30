document.addEventListener('DOMContentLoaded', () => {
  const year = document.querySelector('#year')
  if (year) year.textContent = new Date().getFullYear()

  const menuToggle = document.querySelector('.menu-toggle')
  const mobileNav = document.querySelector('.mobile-nav')
  if (menuToggle && mobileNav) {
    menuToggle.addEventListener('click', () => {
      const open = menuToggle.getAttribute('aria-expanded') === 'true'
      menuToggle.setAttribute('aria-expanded', String(!open))
      mobileNav.classList.toggle('open', !open)
    })
  }

  const valueGrid = document.querySelector('.value-grid')
  if (valueGrid) {
    valueGrid.innerHTML = [
      ['Inclusion & Diversity', 'Embracing all identities and backgrounds.'],
      ['Safety & Dignity', 'Prioritizing well-being and safeguarding.'],
      ['Creativity & Expression', 'Valuing artistic freedom and storytelling.'],
      ['Community Leadership', 'Refugee-led and community-driven.'],
      ['Accountability', 'Responsible, transparent use of resources.']
    ].map(([title, body]) => `<article class="value"><i></i><h3>${title}</h3><p>${body}</p></article>`).join('')
  }

  const hero = document.querySelector('.hero > img')
  const galleryImages = [
    '/assets/fbc-gallery/display.jpg',
    '/assets/fbc-gallery/colorful.jpg',
    '/assets/fbc-gallery/community.jpg',
    '/assets/fbc-gallery/blue-beads.jpg',
    '/assets/fbc-gallery/bracelets.jpg'
  ]
  if (hero) {
    let heroIndex = 0
    setInterval(() => {
      heroIndex = (heroIndex + 1) % galleryImages.length
      hero.classList.add('is-changing')
      setTimeout(() => {
        hero.src = galleryImages[heroIndex]
        hero.classList.remove('is-changing')
      }, 260)
    }, 4200)
  }

  const programGrid = document.querySelector('.program-grid')
  if (programGrid) {
    const programs = [
      ['A', 'Arts Education & Training', ['/assets/fbc-gallery/blue-beads.jpg', '/assets/fbc-gallery/colorful.jpg', '/assets/fbc-gallery/display.jpg'], ['Teen and student holiday programs', 'Film, choreography, writing and performance training', 'Creative learning workshops and mentorship', 'Garden practice and farming']],
      ['B', 'Production & Creative Works', ['/assets/fbc-gallery/community.jpg', '/assets/fbc-gallery/message.jpg', '/assets/fbc-gallery/smile.jpg'], ['Film and media production', 'Music composition and choreography', 'Scriptwriting, performance and showcases', 'Community exhibitions and presentations']],
      ['C', 'Livelihoods & Skills', ['/assets/fbc-gallery/bracelets.jpg', '/assets/fbc-gallery/colorful.jpg', '/assets/fbc-gallery/name.jpg'], ['Beadwork and textile design', 'Crochet and related crafts', 'Product development, finishing and quality control', 'Income-generating creative production and farming']]
    ]
    programGrid.innerHTML = programs.map(([tag, title, images, items]) => `<article class="program card"><img src="${images[0]}" alt="${title}" /><div><p class="eyebrow accent-text">Program ${tag}</p><h3>${title}</h3><ul>${items.map(item => `<li>${item}</li>`).join('')}</ul></div></article>`).join('')
    let programImageIndex = 0
    setInterval(() => {
      programImageIndex = (programImageIndex + 1) % 3
      document.querySelectorAll('.program img').forEach((image, index) => {
        const nextImage = programs[index][2][programImageIndex]
        image.classList.add('is-changing')
        setTimeout(() => { image.src = nextImage; image.classList.remove('is-changing') }, 260)
      })
    }, 3600)
  }

  document.querySelectorAll('[data-flow-images]').forEach((strip) => {
    const images = [...strip.querySelectorAll('img')]
    let index = 0
    setInterval(() => {
      index = (index + 1) % images.length
      images.forEach((image, imageIndex) => { const active = imageIndex === index; image.classList.toggle('is-active', active); image.style.opacity = active ? '1' : '.42'; image.style.transform = active ? 'scale(1.02)' : 'scale(.98)' })
    }, 2800)
  })
})
