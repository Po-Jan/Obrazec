document.addEventListener('DOMContentLoaded', function() {
    const displayName= document.querySelector('#displayName');
    const textDisplayName=document.querySelector('.textDisplayName');
    
    displayName.addEventListener("mouseenter", () => {
        mouseHovered = true; 
    });
    

    displayName.addEventListener("mouseleave", () => {
        mouseHovered = false; 
    });

    displayName.addEventListener('click',function(event){
        event.stopPropagation();
        textDisplayName.classList.add('displayBlock'); 
        textDisplayName.classList.add('expand');
        textUsername.classList.remove('displayBlock');
        textUsername.classList.remove('expand'); 
    });

    displayName.addEventListener('focusin',function(event){
        event.stopPropagation();
        if(!mouseHovered){
            textDisplayName.classList.add('displayBlock'); 
            textDisplayName.classList.add('expand');
            textUsername.classList.remove('displayBlock');
            textUsername.classList.remove('expand');
        }
 
    });


    const username=document.querySelector('#username');
    const textUsername=document.querySelector('.textUsername');

    username.addEventListener("mouseenter", () => {
        mouseHovered1 = true; 
    });
    

    username.addEventListener("mouseleave", () => {
        mouseHovered1 = false; 
    });

    username.addEventListener('click',function(event){
        event.stopPropagation();
            textUsername.classList.add('displayBlock'); 
            textUsername.classList.add('expand'); 
            textDisplayName.classList.remove('displayBlock');
            textDisplayName.classList.remove('expand'); 
        
    });

    username.addEventListener('focusin',function(event){
        event.stopPropagation();
        if(!mouseHovered1){
            textUsername.classList.add('displayBlock'); 
            textUsername.classList.add('expand'); 
            textDisplayName.classList.remove('displayBlock');
            textDisplayName.classList.remove('expand'); 
        }
    });
    username.addEventListener('focusout',function(event){
        event.stopPropagation();
        if(!mouseHovered1){
            textUsername.classList.remove('displayBlock'); 
            textUsername.classList.remove('expand'); 
            textDisplayName.classList.remove('displayBlock');
            textDisplayName.classList.remove('expand'); 
        }
    });


    

    document.addEventListener('click',function(event){
        textUsername.classList.remove('displayBlock');
        textUsername.classList.remove('expand'); 
        textDisplayName.classList.remove('displayBlock');
        textDisplayName.classList.remove('expand');
    });




});