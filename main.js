const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const menuBurguer = document.querySelector('.menu');
const mobilemenu = document.querySelector('.mobile-menu');




menuEmail.addEventListener('click', toggleDesktopMenu);
menuBurguer.addEventListener('click', toggleMobilemenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);



function toggleDesktopMenu() {
    const isAsaideClose = aside.classList.contains('inactive');
    
    if (!isAsaideClose) {
        aside.classList.add('inactive')
        
    }

    desktopMenu.classList.toggle('inactive')
}

function toggleMobilemenu() {
    const isAsaideClose = aside.classList.contains('inactive');
    
    if (!isAsaideClose) {
        aside.classList.add('inactive')
        
    }

    mobilemenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
    const isMobileMenuClose = mobilemenu.classList.contains('inactive');

    if (!isMobileMenuClose) {
        mobilemenu.classList.add('inactive')
        
    }

    aside.classList.toggle('inactive');
}
