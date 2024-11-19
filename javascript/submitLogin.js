document.addEventListener('DOMContentLoaded', function () {
    function validateEmail(email) {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    }

    function validatePassword() {
        const password = document.querySelector('#password');
        const passRegex = /^(?=(?:.*[A-Za-z]){8,})(?=.*\d)(?!.*\s)[A-Za-z\d!@#$%^&*()_+={}\[\]:;"'<>,.?/\\|`~\-]+$/;
        return passRegex.test(password.value.trim());
    }


    const button = document.querySelector('.loginButton');

    const username = document.querySelector('#username');
    const password = document.querySelector('#password');

    const labelUsername = document.querySelector('#labelUsername');
    const span = document.querySelector('#labelUsername span');

    const labelPassword = document.querySelector('#labelPassword');
    const span2 = document.querySelector('#labelPassword span');

    function check() {
        const username1 = username.value.trim();
        const password1 = password.value.trim();

        if (username1 === "") {
            labelUsername.classList.add("redText");
            span.textContent = " - Required";
            span.classList.add('redSpan');
        } else if (username1 !== "" && (validateEmail(username1))) {
            labelUsername.classList.remove("redText");
            span.textContent = "*";
            span.classList.remove('redSpan');
        } else if (username1 !== "" && (validateEmail(username1) !== true)) {
            labelUsername.classList.add("redText");
            span.textContent = " - Not a valid email";
            span.classList.add('redSpan');
        }

        if (password1 === "") {
            labelPassword.classList.add("redText");
            span2.textContent = " - Required";
            span2.classList.add('redSpan');
        } else if (password1 !== "" && validatePassword()) {
            labelPassword.classList.remove("redText");
            span2.textContent = "*";
            span2.classList.remove('redSpan');
        } else if (validatePassword() !== true) {
            labelPassword.classList.add("redText");
            span2.textContent = " - Password must contain at least 8 letters and 1 number!";
            span2.classList.add('redSpan');
        }

        if (username1 !== "" && password1 !== "" && (validateEmail(username1)&& validatePassword())) {
            swal("Good job!", "You have successfully logged in!", "success").then(() => {
                username.value = '';
                password.value = '';
            });

        }
    }
    button.addEventListener('click', function () {
        check();
    });

    document.addEventListener("keydown", (event) => {
            if (event.key === "Enter") 
              check();


   });
});