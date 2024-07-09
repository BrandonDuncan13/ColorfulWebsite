const menu = document.querySelector('#mobile_menu');
const menuLinks = document.querySelector('.navbar-menu');

// Display mobile menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
}

menu.addEventListener('click', mobileMenu);
