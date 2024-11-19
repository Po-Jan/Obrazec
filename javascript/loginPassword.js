document.addEventListener('DOMContentLoaded', function () {
    const password = document.querySelector('#password');
    const labelPassword = document.querySelector('#labelPassword');
    const span = document.querySelector('#labelPassword span');

    function validatePassword() {
        const passRegex = /^(?=(?:.*[A-Za-z]){8,})(?=.*\d)(?!.*\s)[A-Za-z\d!@#$%^&*()_+={}\[\]:;"'<>,.?/\\|`~\-]+$/;
        return passRegex.test(password.value.trim());
    }

    password.addEventListener('input', function () {
        const password1 = password.value.trim();

        if (password1 === "") {
            labelPassword.classList.add("redText");
            span.textContent = " - Required";
            span.classList.add('redSpan');
        } else if (password1 !== "" && validatePassword()) {
            labelPassword.classList.remove("redText");
            span.textContent = "*";
            span.classList.remove('redSpan');
        } else if (validatePassword() !== true) {
            labelPassword.classList.add("redText");
            span.textContent = " - Password must contain at least 8 letters and 1 number!";
            span.classList.add('redSpan');
        }

    });
});