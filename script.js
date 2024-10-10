const toService = document.getElementById('toService')
const serviceSection = document.getElementById('services')

toService.addEventListener('click', (e) => {
    e.preventDefault();

    serviceSection.scrollIntoView({
        behavior: 'smooth'
    })
})


const toAbout = document.getElementById('toAbout')
const aboutSection = document.getElementById('about-us')

toAbout.addEventListener('click', (e) => {
    e.preventDefault();

    aboutSection.scrollIntoView({
        behavior:'smooth'
    })
})

ScrollReveal().reveal('#services', {
    distance: '50px',
    easing: 'ease',
    opacity: 0,
    interval: 200,
    duration: 800
})

ScrollReveal().reveal('.problems', {
    distance: '50px',
    easing: 'ease',
    opacity: 0,
    interval: 200,
    duration: 800
})

ScrollReveal().reveal('.about-us', {
    distance: '50px',
    easing: 'ease',
    opacity: 0,
    interval: 200,
    duration: 800
})