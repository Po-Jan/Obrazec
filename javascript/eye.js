document.addEventListener('DOMContentLoaded', function () {
    const svgEye = document.querySelector('.svgEye');
    const path1 = document.querySelector('.path1');
    const path2 = document.querySelector('.path2');
    const input = document.querySelector('#password');
    let index = 0;
    svgEye.addEventListener('click', function () {
        if (index % 2 != 0) {
            path2.classList.remove('displayBlock');
            path1.classList.add('displayBlock');

            input.type = "password";

        } else {
            path1.classList.remove('displayBlock');
            path2.classList.add('displayBlock');
            input.type = "text";

        }
        index++;
    });
});