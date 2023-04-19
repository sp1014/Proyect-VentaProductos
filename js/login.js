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
});