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
    easing: 'ease-in-out',
    opacity: 0.2,
    interval: 100,
    duration: 300
})

ScrollReveal().reveal('.problems', {
    easing: 'ease-in-out',
    opacity: 0,
    interval: 200,
    duration: 300
})

ScrollReveal().reveal('.about-us', {
    easing: 'ease-in-out',
    opacity: 0,
    interval: 200,
    duration: 300
})
