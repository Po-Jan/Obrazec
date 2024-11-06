document.addEventListener('DOMContentLoaded', function() {
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    const button = document.querySelector('.continueButton');

    const email = document.querySelector('#email');
    const emailLabel = document.querySelector('#emailLabel');
    const span = document.querySelector('#emailLabel span');
    

    


    button.addEventListener('click', function() {
        const email1 = email.value.trim();
        if (!button.disabled) {
            if (email1 !== ""&&validateEmail(email1)) {
                emailLabel.classList.remove("redText");
                span.textContent="*"; 
                span.classList.remove('redSpan');
            }else if(email1 === ""){
                emailLabel.classList.add("redText");
                span.textContent=" - Required";
                span.classList.add('redSpan');
            }else{
                emailLabel.classList.add("redText");
                span.textContent=" - Not a valid email";
                span.classList.add('redSpan');
            }
        }
    });

    email.addEventListener('input', function(){  
        const email1 = email.value.trim();
       
        if (email1 === "") {
            emailLabel.classList.add("redText"); 
            span.textContent=" - Required";
            span.classList.add('redSpan');
        }else{
            emailLabel.classList.remove("redText");
            span.textContent="*"; 
            span.classList.remove('redSpan');
        }
        
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            const email1 = email.value.trim();
            if (!button.disabled) {
                if (email1 !== ""&&validateEmail(email1)) {
                    emailLabel.classList.remove("redText");
                    span.textContent="*"; 
                    span.classList.remove('redSpan');
                }else if(email1 === ""){
                    emailLabel.classList.add("redText");
                    span.textContent=" - Required";
                    span.classList.add('redSpan');
                }else{
                    emailLabel.classList.add("redText");
                    span.textContent=" - Not a valid email";
                    span.classList.add('redSpan');
                }
            }
    }
    });
});