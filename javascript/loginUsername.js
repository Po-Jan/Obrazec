document.addEventListener('DOMContentLoaded', function () {
    function validateEmail(email) {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    }

    const username = document.querySelector('#username');
    const labelUsername = document.querySelector('#labelUsername');
    const span = document.querySelector('#labelUsername span');



    username.addEventListener('input', function () {
        const username1 = username.value.trim();

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
    });

});
