$(document).ready(function() {
    // Función para expandir o contraer la barra lateral al hacer clic en el botón
    $('#sidebarCollapse').click(function() {
        $('#sidebar').toggleClass('active');
        $('#content').toggleClass('active');
    });
});
