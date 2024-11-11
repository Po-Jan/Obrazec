document.addEventListener('DOMContentLoaded', function() {
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function validatePassword() {
        const password = document.querySelector('#password');
        const password1 = password.value.trim(); 
        if (/[A-Z]/.test(password1) && /[0-9]/.test(password1) && password1.length > 6) {
            return true;
        }
        return false;
    }

    function validatePhoneNumber(){
        const username = document.querySelector('#username');
        const username1 = username.value.trim();
        return (username1.length===9&&!isNaN(username1));
    }

    const button = document.querySelector('.loginButton');

    const username = document.querySelector('#username');
    const password = document.querySelector('#password');

    const labelUsername=document.querySelector('#labelUsername');
    const span = document.querySelector('#labelUsername span');

    const labelPassword =document.querySelector('#labelPassword');
    const span2 = document.querySelector('#labelPassword span');


    button.addEventListener('click', function() {
        const username1 = username.value.trim();
        const password1 = password.value.trim();
        if (!button.disabled) {
            if (username1!==""&&password1!==""&&(validateEmail(username1)||validatePhoneNumber())&&validatePassword()) {
                labelPassword.classList.remove("redText"); 
                span.textContent="*";
                span.classList.remove('redSpan');

                labelUsername.classList.remove("redText"); 
                span2.textContent="*";
                span2.classList.remove('redSpan');
                swal("Good job!", "You have successfully logged in!", "success").then(() =>{
                    username.value='';
                    password.value='';
                });  
        }else{
            labelUsername.classList.add("redText"); 
            span.textContent=" - Login or password is invalid.";
            span.classList.add('redSpan');

            labelPassword.classList.add("redText"); 
            span2.textContent=" - Login or password is invalid.";
            span2.classList.add('redSpan');
        }   
        }   
    });

    document.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                const username1 = username.value.trim();
                const password1 = password.value.trim();
                if (!button.disabled) {
                    if (username1!==""&&password1!==""&&(validateEmail(username1)||validatePhoneNumber())&&validatePassword()) {
                        labelPassword.classList.remove("redText"); 
                        span.textContent="*";
                        span.classList.remove('redSpan');
        
                        labelUsername.classList.remove("redText"); 
                        span2.textContent="*";
                        span2.classList.remove('redSpan');
                        swal("Good job!", "You have successfully logged in!", "success").then(() =>{
                            username.value='';
                            password.value='';
                        });  
                }else{
                    labelUsername.classList.add("redText"); 
                    span.textContent=" - Login or password is invalid.";
                    span.classList.add('redSpan');
        
                    labelPassword.classList.add("redText"); 
                    span2.textContent=" - Login or password is invalid.";
                    span2.classList.add('redSpan');
                }   
            }   
        }
    });
});


