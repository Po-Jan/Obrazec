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
    function validatePasswordLength() {
        const password = document.querySelector('#password');
        const password1 = password.value.trim();
        if (password1.length > 6) {
            return true;
        }
        return false;
    }
    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    function validateUsername() {
        const usernamE = document.querySelector('#usernamE');
        const usernamE1 = usernamE.value.trim();
        return (usernamE1.length > 1 && usernamE1.length < 33)
    }


    const button = document.querySelector('.continueButton');

    const email = document.querySelector('#email');
    const displayNamE = document.querySelector('#displayNamE');
    const usernamE = document.querySelector('#usernamE');
    const password = document.querySelector('#password');
    const day = document.querySelector('.daySpan');
    const month = document.querySelector('.monthSpan');
    const year = document.querySelector('.yearSpan');

    const leftDiv = document.querySelector('.leftDiv');
    const leftDiv2 = document.querySelector('.leftDiv2');


    button.addEventListener('click', function () {
        const email1 = email.value.trim();
        const usernamE1 = usernamE.value.trim();
        const password1 = password.value.trim();
        const day1 = day.textContent.trim();
        const month1 = month.textContent.trim();
        const year1 = year.textContent.trim();
        if (!button.disabled) {
            if (email1 !== "" && usernamE1 !== "" && password1 !== "" && day1 !== "Day" && month1 !== "Month" && year1 !== "Year" && checkYear() && (validatePassword() && validatePasswordLength()) && validateEmail(email1) && validateUsername()) {
                swal("Good job!", "You have successfully registered!", "success").then(() => {
                    
                    email.value = '';
                    displayNamE.value = '';
                    usernamE.value = '';
                    password.value = '';
                    day.textContent = 'Day';
                    month.textContent = 'Month';
                    year.textContent = 'Year';
                    button.disabled = true;
                    leftDiv2.classList.remove('leftDiv2JS');
                    leftDiv.classList.remove('leftDivJS');

                });

            }
        }
    });
    document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            const email1 = email.value.trim();
            const usernamE1 = usernamE.value.trim();
            const password1 = password.value.trim();
            const day1 = day.textContent.trim();
            const month1 = month.textContent.trim();
            const year1 = year.textContent.trim();
            if (!button.disabled) {
                if (email1 !== "" && usernamE1 !== "" && password1 !== "" && day1 !== "Day" && month1 !== "Month" && year1 !== "Year" && checkYear() && (validatePassword() && validatePasswordLength()) && validateEmail(email1) && validateUsername()) {
                    swal("Good job!", "You have successfully registered!", "success").then(() => {
                        email.value = '';
                        displayNamE.value = '';
                        usernamE.value = '';
                        password.value = '';
                        day.textContent = 'Day';
                        month.textContent = 'Month';
                        year.textContent = 'Year';

                        button.disabled = true;
                        leftDiv2.classList.remove('leftDiv2JS');
                        leftDiv.classList.remove('leftDivJS');
                    });

                }
            }
        }
    });

});





