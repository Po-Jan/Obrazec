document.addEventListener('DOMContentLoaded', function() {

    const button = document.querySelector('.continueButton');

    
    const legendDatum = document.querySelector('#legendDatum');
    const span = document.querySelector('#legendDatum span');

    const day=document.querySelector('.daySpan');
    const month=document.querySelector('.monthSpan');
    const year=document.querySelector('.yearSpan');
    
    


    button.addEventListener('click', function() {
    
        if (!button.disabled) {
            const day1 = day.textContent.trim();
            const month1 = month.textContent.trim();
            const year1 = year.textContent.trim();
            if(day1==="Day" || month1==="Month" || year1==="Year"){
                legendDatum.classList.add("redText");
                span.textContent=" - Required";
                span.classList.add('redSpan');
            }
            
            
        }
    });

    const dayID=document.querySelector('#day');

    dayID.addEventListener('click', function() {
        const day1 = day.textContent.trim();
            const month1 = month.textContent.trim();
            const year1 = year.textContent.trim();
        if(day1==="Day" || month1==="Month" || year1==="Year"){
            
        }else{
            legendDatum.classList.remove("redText");
            span.textContent="*";
            span.classList.remove('redSpan');
        }

    });

    const monthID=document.querySelector('#month');

    monthID.addEventListener('click', function() {
        const day1 = day.textContent.trim();
            const month1 = month.textContent.trim();
            const year1 = year.textContent.trim();
        if(day1==="Day" || month1==="Month" || year1==="Year"){
           
        }else{
            legendDatum.classList.remove("redText");
            span.textContent="*";
            span.classList.remove('redSpan');
        }

    });

    const yearID=document.querySelector('#year');

    yearID.addEventListener('click', function() {
        const day1 = day.textContent.trim();
            const month1 = month.textContent.trim();
            const year1 = year.textContent.trim();
        if(day1==="Day" || month1==="Month" || year1==="Year"){
            
        }else{
            legendDatum.classList.remove("redText");
            span.textContent="*";
            span.classList.remove('redSpan');
        }

    });
    document.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            if (!button.disabled) {
                const day1 = day.textContent.trim();
                const month1 = month.textContent.trim();
                const year1 = year.textContent.trim();
                if(day1==="Day" || month1==="Month" || year1==="Year"){
                    legendDatum.classList.add("redText");
                    span.textContent=" - Required";
                    span.classList.add('redSpan');
                }
                
                
            }
        }
    });
});