// MENU
const menuContainer = document.querySelector(".main-navigation-mobile"),
    menuOpenBtn = menuContainer.querySelector(".menu-toggle-btn"),
    menuCloseBtn = menuContainer.querySelector(".menu-close-btn");

function toggleMenu() {
    menuContainer.classList.toggle("opened");
    ga('send', 'event', 'FastOrder', 'Send');
}
menuOpenBtn.addEventListener("click", toggleMenu), menuCloseBtn.addEventListener("click", toggleMenu);

// NAVIGATION-TO-FORM
$(".header-btn").click(function (){
    $('html, body').animate({
        scrollTop: $(".action-text").offset().top
    }, 1000);
});








