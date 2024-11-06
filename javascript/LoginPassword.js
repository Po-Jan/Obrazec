document.addEventListener('DOMContentLoaded', function() {
    function validatePassword() {
        const password = document.querySelector('#password');
        const password1 = password.value.trim(); 
        if (/[A-Z]/.test(password1) && /[0-9]/.test(password1) && password1.length > 6) {
            return true;
        }
        return false;
    }
    

    const password=document.querySelector('#password');
    const labelPassword=document.querySelector('#labelPassword');
    const span=document.querySelector('#labelPassword span');
    password.addEventListener('input', function() {
        const password1 = password.value.trim();
    
            if (password1 !== ""&&validatePassword(password1)) {
                labelPassword.classList.remove("redText"); 
                span.textContent="*";
                span.classList.remove('redSpan');
            }
    });


});