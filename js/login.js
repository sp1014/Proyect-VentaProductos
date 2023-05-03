$(document).ready(function() {
    
    $('#toggle-password').click(function() {
        let passwordInput = $('#password');
        let passwordIcon = $('#toggle-password i');

        if (passwordInput.attr('type') === 'password') {
            passwordInput.attr('type', 'text');
            passwordIcon.removeClass('fa-eye-slash').addClass('fa-eye');
        } else {
            passwordInput.attr('type', 'password');
            passwordIcon.removeClass('fa-eye').addClass('fa-eye-slash');
        }
    });
    $('form').submit(function(event) { 
        event.preventDefault();
        location.href="inicio.html";
        /*$.ajax({
            url: "http://superpoli.somee.com/api/Product/"+idProducto,
            type:"GET", 
            success: function(result){
                console.log(result);
                if(result){
                    location.href="inicio.html";
                }else{
                    alert('User No encontrado');
                }
            }
        });*/
        
    });   
});