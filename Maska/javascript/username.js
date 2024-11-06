document.addEventListener('DOMContentLoaded', function() {

    const button = document.querySelector('.continueButton');

    const usernamE = document.querySelector('#usernamE');
    const labelUsername = document.querySelector('#labelUsername');
    const span = document.querySelector('#labelUsername span');
    

    
    button.addEventListener('click', function() {
        const usernamE1 = usernamE.value.trim();
        if (!button.disabled) {
            if (usernamE1 === "") {
                labelUsername.classList.add("redText"); 
                span.textContent=" - Required";
                span.classList.add('redSpan');
            }else if(usernamE1.length<2||usernamE1.length>32){
                labelUsername.classList.add("redText");
                span.textContent=" - This must be 2-32 characters.";
                span.classList.add('redSpan');
            }
        }
    });


    usernamE.addEventListener('input', function(){  
        const usernamE1 = usernamE.value.trim();
       
            if (usernamE1 !== "") {
                labelUsername.classList.remove("redText");
                span.textContent="*"; 
                span.classList.remove('redSpan');
            }else{
                labelUsername.classList.add("redText");
                span.textContent=" - Required";
                span.classList.add('redSpan');
            }
        
    });
    document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            const usernamE1 = usernamE.value.trim();
        if (!button.disabled) {
            if (usernamE1 === "") {
                labelUsername.classList.add("redText"); 
                span.textContent=" - Required";
                span.classList.add('redSpan');
            }else if(usernamE1.length<2||usernamE1.length>32){
                labelUsername.classList.add("redText");
                span.textContent=" - This must be 2-32 characters.";
                span.classList.add('redSpan');
            }
        }
        }
    });
});
