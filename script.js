const menuBtn = document.querySelector('.fa-duotone')
const navlinks = document.querySelector('.nav-links')

menuBtn.addEventListener('click',()=>{
    navlinks.classList.toggle('mobile-menu')
})