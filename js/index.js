$(document).ready(() => {
    //const inicioTemplate = Handlebars.templates.inicio;
    //$("#main").html(inicioTemplate());
    cargarListaProductos();
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

function cargarListaProductos(){
    $.ajax({
        url: "http://superpoli.somee.com/api/Product",
        type:"GET", 
        success: function(result){
            console.log(result);
            console.log(result[0].product.id);
            $(result).each(function(index,value){
                var div='<div class="card col-sm-4" onclick="redirectProducto('+value.productId+')"><div class="card-body"><img class="img-fluid" src="www.SuperPoli.somee.com/Archivos/'+value.file.name+'"><h5 class="card-title">'+value.product.nameProduct+'</h5><p class="card-text">$'+value.product.price+'</p></div></div>';
                $("#items").append(div);
            });
            
        }
    });
}

function redirectProducto(id){
    location.href="product.html?idProducto="+id;
}

function cargarProducto(){
    var idProducto= getUrlParameter("idProducto");
    $.ajax({
        url: "http://superpoli.somee.com/api/Product/"+idProducto,
        type:"GET", 
        success: function(result){
            console.log(result);
            console.log(result.id);
            $('#nameProduct').text(result.product.nameProduct);
            $('#description').text(result.product.descriptions);
            $('#price').text('Precio: '+result.product.price+' COP');
            $('#quality').text('Cantidad disponible: '+result.product.quantity);
            $('#aplicaPromocion').text('¿Aplica promoción?: '+ (result.product.promotion?'Si':'No'));
            $('#image1').attr('src','#');
            $('#image1').attr('src','#');
            $('#image1').attr('src','#');
        }
    });
}
var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
    return false;
};