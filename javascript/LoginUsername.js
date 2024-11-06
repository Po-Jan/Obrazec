document.addEventListener('DOMContentLoaded', function() {
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    const username = document.querySelector('#username');
    const labelUsername = document.querySelector('#labelUsername');
    const span = document.querySelector('#labelUsername span');
    

    
    username.addEventListener('input', function() {
        const username1 = username.value.trim();
    
            if (username1 !== ""&&validateEmail(username1)) {
                labelUsername.classList.remove("redText"); 
                span.textContent="*";
                span.classList.remove('redSpan');
            }
    });


});