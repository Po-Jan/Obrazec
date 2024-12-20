document.addEventListener('DOMContentLoaded', function () {

    function checkYear() {
        const day = document.querySelector('.daySpan');
        const month = document.querySelector('.monthSpan');
        const year = document.querySelector('.yearSpan');
        const day1 = day.textContent.trim();
        const month1 = month.textContent.trim();
        const year1 = year.textContent.trim();
        if (day1 !== "Day" && month1 !== "Month" && year1 !== "Year") {
            if ((0 == year1 % 4) && (0 != year1 % 100) || (0 == year1 % 400)) {
                switch (month1) {
                    case "April":
                    case "June":
                    case "September":
                    case "November":
                        if (Number(day1) > 30) {
                            return false;
                        } else {
                            return true;
                        }


                    case "February":
                        if (Number(day1) > 29) {
                            return false;
                        } else {
                            return true;
                        }

                    default:
                        return true;

                }
            } else {
                switch (month1) {
                    case "February":
                        if (Number(day1) > 28) {
                            return false;
                        } else {
                            return true;
                        }


                    case "April":
                    case "June":
                    case "September":
                    case "November":
                        if (Number(day1) > 30) {
                            return false;
                        } else {
                            return true;
                        }
                    default:
                        return true;
                }
            }
        }
    }

    function validatePassword() {
        const password = document.querySelector('#password');
        const passRegex = /^(?=(?:.*[A-Za-z]){8,})(?=.*\d)(?!.*\s)[A-Za-z\d!@#$%^&*()_+={}\[\]:;"'<>,.?/\\|`~\-]+$/;
        return passRegex.test(password.value.trim());
    }
    function validateEmail(email) {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    }
    function validateUsername() {
        const usernamE = document.querySelector('#usernamE');
        const usernamE1 = usernamE.value.trim();
        return (usernamE1.length > 1 && usernamE1.length < 33)
    }


    const button = document.querySelector('.continueButton');
    const input = document.querySelector('#password');
    const email = document.querySelector('#email');
    const displayNamE = document.querySelector('#displayNamE');
    const usernamE = document.querySelector('#usernamE');
    const password = document.querySelector('#password');
    const day = document.querySelector('.daySpan');
    const month = document.querySelector('.monthSpan');
    const year = document.querySelector('.yearSpan');

    const leftDiv = document.querySelector('.leftDiv');
    const leftDiv2 = document.querySelector('.leftDiv2');

    const path1 = document.querySelector('.path1');
    const path2 = document.querySelector('.path2');

    function check() {
        const email1 = email.value.trim();
        const usernamE1 = usernamE.value.trim();
        const password1 = password.value.trim();
        const day1 = day.textContent.trim();
        const month1 = month.textContent.trim();
        const year1 = year.textContent.trim();
        if (!button.disabled) {
            if (email1 !== "" && usernamE1 !== "" && password1 !== "" && day1 !== "Day" && month1 !== "Month" && year1 !== "Year" && checkYear() && validatePassword() && validateEmail(email1) && validateUsername()) {
                swal("Good job!", "You have successfully registered!", "success").then(() => {

                    email.value = '';
                    displayNamE.value = '';
                    usernamE.value = '';
                    password.value = '';
                    day.textContent = 'Day';
                    month.textContent = 'Month';
                    year.textContent = 'Year';
                    button.disabled = true;
                    path2.classList.add('displayBlock');
                    path1.classList.remove('displayBlock');
                    path1.classList.add('displayNone');
                    path2.classList.remove('displayNone');
                    input.type = "password";
                    leftDiv2.classList.remove('leftDiv2JS');
                    leftDiv.classList.remove('leftDivJS');
                    setTimeout(function () {
                        window.location.href = 'index.html';
                    }, 1000);
                });

            }
        }
    }
    button.addEventListener('click', function () {
        check();
    });
    document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            check();
        }
    });

});





