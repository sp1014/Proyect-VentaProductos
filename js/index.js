$(document).ready(() => {
    const inicioTemplate = Handlebars.templates.inicio;
    $("#main").html(inicioTemplate());
});

function clickProduct () {
    const productTemplate = Handlebars.templates.product;
    $("#main").html(productTemplate());

    console.log('dasdsad');
}

$('#btnMenu').on('click', () => {
    const menu = $('#menu');

    console.log(menu.hasClass('menu-show'));

    if (!menu.hasClass('menu-show')) {
        $('#menu').addClass('menu-show');
    } else {
        $('#menu').removeClass('menu-show');
    }
});

$('#btnNavbar').on('click', () => {
    const navbar = $('#navbar');
    const mainContainer = $('#mainContainer');
    
    if (!navbar.hasClass('navbar-collapse')) {
        navbar.addClass('navbar-collapse');
        mainContainer.addClass('container-navbar-collapse');
    } else {
        navbar.removeClass('navbar-collapse');
        mainContainer.removeClass('container-navbar-collapse');
    }
});
$('.card').on('click', () => {
    location.href="product.html";
});