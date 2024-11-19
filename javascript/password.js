document.addEventListener('DOMContentLoaded', function () {
    function validatePassword() {
        const password = document.querySelector('#password');
        const passRegex = /^(?=(?:.*[A-Za-z]){8,})(?=.*\d)(?!.*\s)[A-Za-z\d!@#$%^&*()_+={}\[\]:;"'<>,.?/\\|`~\-]+$/;
        return passRegex.test(password.value.trim());
    }

    const button = document.querySelector('.continueButton');

    const password = document.querySelector('#password');
    const labelPassword = document.querySelector('#labelPassword');
    const span = document.querySelector('#labelPassword span');


function check(){
    const password1 = password.value.trim();
    if (password1 === "") {
        labelPassword.classList.add("redText");
        span.textContent = " - Required";
        span.classList.add('redSpan');
    } else if (validatePassword() == false) {
        labelPassword.classList.add("redText");
        span.textContent = " - Password must contain at least 8 letters and 1 number!";
        span.classList.add('redSpan');
    }else{
        labelPassword.classList.remove("redText");
        span.textContent = "*";
        span.classList.remove('redSpan');
    }
}


    button.addEventListener('click', function () {
        if (!button.disabled) {
           check();
        }
    });

    password.addEventListener('input', function () {
        check();
    });
    document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            if (!button.disabled) {
                check();
            }
        }
    });

});