document.addEventListener('DOMContentLoaded', function() {

    const button = document.querySelector('.continueButton');

    const usernamE = document.querySelector('#usernamE');
    const labelUsername = document.querySelector('#labelUsername');
    const span = document.querySelector('#labelUsername span');
    
function check(){
    const usernamE1 = usernamE.value.trim();
    if (usernamE1 === "") {
        labelUsername.classList.add("redText");
        span.textContent=" - Required";
        span.classList.add('redSpan');
    }else if(usernamE1.length<2||usernamE1.length>32){
        labelUsername.classList.add("redText");
        span.textContent=" - This must be 2-32 characters.";
        span.classList.add('redSpan');
    }else{
        labelUsername.classList.remove("redText");
        span.textContent="*";
        span.classList.remove('redSpan');
    }
}
    
    button.addEventListener('click', function() {
        if (!button.disabled) {
            check();
        }
    });


    usernamE.addEventListener('input', function(){  
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
