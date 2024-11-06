//ZA DAY OPTION
document.addEventListener('DOMContentLoaded', function() {
    const day=document.querySelector('#day');
    const daySlika=document.querySelector('#dayOption');

    daySlika.addEventListener('click', function() {
        day.classList.toggle('displayBlock'); 
    });

    document.addEventListener('click', function(event) {
        if (!day.contains(event.target) && !daySlika.contains(event.target)) {
            day.classList.remove('displayBlock'); 
        }
    });


   
    const optionDivs = document.querySelectorAll('#day .optionDiv');
    const  daySpan = document.querySelector('.daySpan');
    
    optionDivs.forEach(function(div) {
         div.addEventListener('click', function() {
            const text = this.textContent; 
            daySpan.textContent=text;
            day.classList.toggle('displayBlock'); 
        });
    });

});



//ZA MONTH OPTION
document.addEventListener('DOMContentLoaded', function() {
    const day=document.querySelector('#month');
    const daySlika=document.querySelector('#monthOption');

    daySlika.addEventListener('click', function() {
        day.classList.toggle('displayBlock'); 
    });

    document.addEventListener('click', function(event) {
        if (!day.contains(event.target) && !daySlika.contains(event.target)) {
            day.classList.remove('displayBlock'); 
        }
    });


    const optionDivs = document.querySelectorAll('#month .optionDiv');
    const  daySpan = document.querySelector('.monthSpan');
    
    optionDivs.forEach(function(div) {
         div.addEventListener('click', function() {
            const text = this.textContent; 
            daySpan.textContent=text;
            day.classList.toggle('displayBlock'); 
        });
    });
});



//ZA YEAR OPTION
document.addEventListener('DOMContentLoaded', function() {
    const day=document.querySelector('#year');
    const daySlika=document.querySelector('#yearOption');

    daySlika.addEventListener('click', function() {
        day.classList.toggle('displayBlock'); 
    });

    document.addEventListener('click', function(event) {
        if (!day.contains(event.target) && !daySlika.contains(event.target)) {
            day.classList.remove('displayBlock'); 
        }
    });


    const optionDivs = document.querySelectorAll('#year .optionDiv');
    const  daySpan = document.querySelector('.yearSpan');
    
    optionDivs.forEach(function(div) {
         div.addEventListener('click', function() {
            const text = this.textContent; 
            daySpan.textContent=text;
            day.classList.toggle('displayBlock'); 
        });
    });
});




