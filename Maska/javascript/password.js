document.addEventListener('DOMContentLoaded', function() {
    function validatePassword() {
        const password = document.querySelector('#password');
        const password1 = password.value.trim(); 
        if (/[A-Z]/.test(password1) && /[0-9]/.test(password1)) {
            return true;
        }
        return false;
    }
    function validatePasswordLength() {
        const password = document.querySelector('#password');
        const password1 = password.value.trim(); 
        if (password1.length > 6) {
            return true;
        }
        return false;
    }
    const button = document.querySelector('.continueButton');

    const password = document.querySelector('#password');
    const labelPassword = document.querySelector('#labelPassword');
    const span = document.querySelector('#labelPassword span');
    

    


    button.addEventListener('click', function() {
        const password1 = password.value.trim();
        if (!button.disabled) {
            if (password1 === "") {
                labelPassword.classList.add("redText"); 
                span.textContent=" - Required";
                span.classList.add('redSpan');
            }else if(validatePasswordLength()==false){
                labelPassword.classList.add("redText"); 
                span.textContent=" - Must be at least 8 characters long";
                span.classList.add('redSpan');
            }else if(validatePassword()==false){
                labelPassword.classList.add("redText"); 
                span.textContent=" - Not strong enough";
                span.classList.add('redSpan');
            }
        }
    });

    password.addEventListener('input', function(){  
        const password1 = password.value.trim();
            if(password1===""){
                labelPassword.classList.add("redText");
                span.textContent=" - Required";
                span.classList.add('redSpan');
            }else{
                labelPassword.classList.remove("redText");
                span.textContent="*"; 
                span.classList.remove('redSpan');
            }
        
    });
    document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            const password1 = password.value.trim();
        if (!button.disabled) {
            if (password1 === "") {
                labelPassword.classList.add("redText"); 
                span.textContent=" - Required";
                span.classList.add('redSpan');
            }else if(validatePasswordLength()==false){
                labelPassword.classList.add("redText"); 
                span.textContent=" - Must be at least 8 characters long";
                span.classList.add('redSpan');
            }else if(validatePassword()==false){
                labelPassword.classList.add("redText"); 
                span.textContent=" - Not strong enough";
                span.classList.add('redSpan');
            }
        }
        }
    });

});