const primaryNav = document.querySelector('#primary-nav')
const mobileToggle = document.querySelector('.mobile-toggle')
const hamburger = document.querySelector('.hamburger')
const hamburgerClose = document.querySelector('.close')
const navItems = document.querySelectorAll('.nav-items')


mobileToggle.addEventListener('click', () => {

    //switches between hamburger and close when clicked
    hamburger.classList.toggle('hamburger-toggle')
    hamburgerClose.classList.toggle('hamburger-toggle')

    //toggles nav list when hamburger menu is clicked
    primaryNav.classList.toggle('primary-nav-toggle')


    //closes mobile nav bar when a nav item is selected
    navItems.forEach(items => {
        items.addEventListener('click', () => {
            hamburger.classList.remove('hamburger-toggle')
            hamburgerClose.classList.add('hamburger-toggle')
            primaryNav.classList.add('primary-nav-toggle')

        })
    });
})