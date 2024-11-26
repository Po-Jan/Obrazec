document.addEventListener('DOMContentLoaded', function() {
    const displayName= document.querySelector('#displayName');
    const textDisplayName=document.querySelector('.textDisplayName');
    

    displayName.addEventListener('click',function(){
        event.stopPropagation();
        textDisplayName.classList.add('displayBlock'); 
        textDisplayName.classList.add('expand');
        textUsername.classList.remove('displayBlock');
        textUsername.classList.remove('expand'); 
    });



    const username=document.querySelector('#username');
    const textUsername=document.querySelector('.textUsername');

    username.addEventListener('click',function(){
        event.stopPropagation();
        textUsername.classList.add('displayBlock'); 
        textUsername.classList.add('expand'); 
        textDisplayName.classList.remove('displayBlock');
        textDisplayName.classList.remove('expand'); 
        
    });



    document.addEventListener('click',function(){
        textUsername.classList.remove('displayBlock');
        textUsername.classList.remove('expand'); 
        textDisplayName.classList.remove('displayBlock');
        textDisplayName.classList.remove('expand');
    });


});