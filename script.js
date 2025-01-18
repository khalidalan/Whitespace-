const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');

menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden'); 
    mobileMenu.classList.toggle('flex');  


    
    if (menuIcon.src.includes('Hum-menu.svg')) {
      menuIcon.src = 'images/element/close_48dp_5F6368_FILL0_wght400_GRAD0_opsz48.svg';
    } else {
      menuIcon.src = 'images/logo/Hum-menu.svg';
    }

});


