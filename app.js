const menu= document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('navbar__menu')
const navLogo = document.qurrySelctor('#navbar__logo')

//Display mobile menu
const mobileMenu= ( )=> {
     menu.classList.toggle('is-active')
     menueLinks.classList.toggle('active')
}
menu.addEventListener('click',mobileMenu);

// Show active menu when scrolling
const highlightMenu = () => {
     const elem = document.qurrySelctor('.highlight')
     const homeMenu = document.qurrySelctor('#home-page')
     const aboutMenu = document.qurrySelctor('#about-page')
     const servicesMenu = document.qurrySelctor('#services-page')
     let scrollPos = window.scrollY;

     // adds 'highlight' class to my menu items
     if(window.innerWidth > 960 && scrollPos < scrollPos < 600) {
          homeMenu.classList.add('highlight')
          aboutMenu.classList.remove('highlight')
          return
     }else if (window.innerWidth > 960 && scrollPos < 1400) {
          servicesMenu.classList.remove('highlight')
          aboutMenu.classList.add('highlight')
          return
     }
     if ((elem && window.innerWidth < 960 && scrollPos < 600) || elem){
          elem.classList.remove('highlight')
     }
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);