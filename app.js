const menu = document.querySelector('#mobile_menu');
const menuLinks = document.querySelector('.navbar-menu');
const navLogo = document.querySelector('#navbar_logo');

// Display mobile menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
}

menu.addEventListener('click', mobileMenu);

// Show active menu when scrolling
const highlightMenu = () => {
    const element = document.querySelector('.highlight');
    const homeMenu = document.querySelector('#home_page');
    const aboutMenu = document.querySelector('#about_page');
    const servicesMenu = document.querySelector('#services_page');
    let scrollPos = window.scrollY;
    console.log(scrollPos);

    // adds .highlight class to my menu items
    if (window.innerWidth > 960 && scrollPos < 600)
    {
        homeMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        return;
    }
    else if (window.innerWidth > 960 && scrollPos < 1400)
    {
        homeMenu.classList.remove('highlight');
        aboutMenu.classList.add('highlight');
        servicesMenu.classList.remove('highlight');
        return;
    }
    else if (window.innerWidth > 960 && scrollPos < 2345)
    {
        aboutMenu.classList.remove('highlight');
        servicesMenu.classList.add('highlight');
        return;
    }

    if ((element && window.innerWidth < 960 && scrollPos < 600) || element)
    {
        element.classList.remove('highlight');
    }
}

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

// Close mobile menu when clicking on menu item
const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active');

    if (window.innerWidth < 960 && menuBars)
    {
        menu.classList.toggle('is-active');
        menuLinks.classList.remove('active');
    }
}

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);
