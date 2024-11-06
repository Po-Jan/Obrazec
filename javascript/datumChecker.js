document.addEventListener('DOMContentLoaded', function() {
    const day=document.querySelector('.daySpan');
    const month=document.querySelector('.monthSpan');
    const year=document.querySelector('.yearSpan');


    const legendDatum = document.querySelector('#legendDatum');
    const span = document.querySelector('#legendDatum span');




    const dayID=document.querySelector('#day');

    dayID.addEventListener('click', function() {
            const day1 = day.textContent.trim();
            const month1 = month.textContent.trim();
            const year1 = year.textContent.trim();
        if(day1!=="Day" && month1!=="Month" && year1!=="Year"){
            if((0 == year1 % 4) && (0 != year1 % 100) || (0 == year1 % 400)){
                switch(month1){
                    case "April":
                    case "June":
                    case "September":
                    case "November":
                        if(Number(day1)>30){
                            legendDatum.classList.add("redText");
                            span.textContent=" - Please enter a valid date of birth";
                            span.classList.add('redSpan');
                        }else{
                            legendDatum.classList.remove("redText");
                            span.textContent="*";
                            span.classList.remove('redSpan');
                        }
                    break;

                    case "February":
                        if(Number(day1)>29){
                            legendDatum.classList.add("redText");
                            span.textContent=" - Please enter a valid date of birth";
                            span.classList.add('redSpan');
                        }else{
                            legendDatum.classList.remove("redText");
                            span.textContent="*";
                            span.classList.remove('redSpan');
                        }
                    break;

                    default:
                        legendDatum.classList.remove("redText");
                            span.textContent="*";
                            span.classList.remove('redSpan');
                    break;

                }
            }else{
                switch(month1){
                    case "February":
                        if(Number(day1)>28){
                            legendDatum.classList.add("redText");
                            span.textContent=" - Please enter a valid date of birth";
                            span.classList.add('redSpan');
                        }else{
                            legendDatum.classList.remove("redText");
                            span.textContent="*";
                            span.classList.remove('redSpan');
                        }
                    break;

                    case "April":
                    case "June":
                    case "September":
                    case "November":
                        if(Number(day1)>30){
                            legendDatum.classList.add("redText");
                            span.textContent=" - Please enter a valid date of birth";
                            span.classList.add('redSpan');
                        }else{
                            legendDatum.classList.remove("redText");
                            span.textContent="*";
                            span.classList.remove('redSpan');
                        }
                    break;

                    default:
                        legendDatum.classList.remove("redText");
                            span.textContent="*";
                            span.classList.remove('redSpan');
                    break;
                }
            }
        }

    });


    const monthID=document.querySelector('#month');

    monthID.addEventListener('click', function() {
        const day1 = day.textContent.trim();
        const month1 = month.textContent.trim();
        const year1 = year.textContent.trim();
    if(day1!=="Day" && month1!=="Month" && year1!=="Year"){
        if((0 == year1 % 4) && (0 != year1 % 100) || (0 == year1 % 400)){
            switch(month1){
                case "April":
                case "June":
                case "September":
                case "November":
                    if(Number(day1)>30){
                        legendDatum.classList.add("redText");
                        span.textContent=" - Please enter a valid date of birth";
                        span.classList.add('redSpan');
                    }else{
                        legendDatum.classList.remove("redText");
                        span.textContent="*";
                        span.classList.remove('redSpan');
                    }
                break;

                case "February":
                    if(Number(day1)>29){
                        legendDatum.classList.add("redText");
                        span.textContent=" - Please enter a valid date of birth";
                        span.classList.add('redSpan');
                    }else{
                        legendDatum.classList.remove("redText");
                        span.textContent="*";
                        span.classList.remove('redSpan');
                    }
                break;

                default:
                    legendDatum.classList.remove("redText");
                        span.textContent="*";
                        span.classList.remove('redSpan');
                break;

            }
        }else{
            switch(month1){
                case "February":
                    if(Number(day1)>28){
                        legendDatum.classList.add("redText");
                        span.textContent=" - Please enter a valid date of birth";
                        span.classList.add('redSpan');
                    }else{
                        legendDatum.classList.remove("redText");
                        span.textContent="*";
                        span.classList.remove('redSpan');
                    }
                break;

                case "April":
                case "June":
                case "September":
                case "November":
                    if(Number(day1)>30){
                        legendDatum.classList.add("redText");
                        span.textContent=" - Please enter a valid date of birth";
                        span.classList.add('redSpan');
                    }else{
                        legendDatum.classList.remove("redText");
                        span.textContent="*";
                        span.classList.remove('redSpan');
                    }
                break;

                default:
                    legendDatum.classList.remove("redText");
                        span.textContent="*";
                        span.classList.remove('redSpan');
                break;
            }
        }
    }


    });

    const yearID=document.querySelector('#year');

    yearID.addEventListener('click', function() {
        const day1 = day.textContent.trim();
        const month1 = month.textContent.trim();
        const year1 = year.textContent.trim();
    if(day1!=="Day" && month1!=="Month" && year1!=="Year"){
        if((0 == year1 % 4) && (0 != year1 % 100) || (0 == year1 % 400)){
            switch(month1){
                case "April":
                case "June":
                case "September":
                case "November":
                    if(Number(day1)>30){
                        legendDatum.classList.add("redText");
                        span.textContent=" - Please enter a valid date of birth";
                        span.classList.add('redSpan');
                    }else{
                        legendDatum.classList.remove("redText");
                        span.textContent="*";
                        span.classList.remove('redSpan');
                    }
                break;

                case "February":
                    if(Number(day1)>29){
                        legendDatum.classList.add("redText");
                        span.textContent=" - Please enter a valid date of birth";
                        span.classList.add('redSpan');
                    }else{
                        legendDatum.classList.remove("redText");
                        span.textContent="*";
                        span.classList.remove('redSpan');
                    }
                break;

                default:
                    legendDatum.classList.remove("redText");
                        span.textContent="*";
                        span.classList.remove('redSpan');
                break;

            }
        }else{
            switch(month1){
                case "February":
                    if(Number(day1)>28){
                        legendDatum.classList.add("redText");
                        span.textContent=" - Please enter a valid date of birth";
                        span.classList.add('redSpan');
                    }else{
                        legendDatum.classList.remove("redText");
                        span.textContent="*";
                        span.classList.remove('redSpan');
                    }
                break;

                case "April":
                case "June":
                case "September":
                case "November":
                    if(Number(day1)>30){
                        legendDatum.classList.add("redText");
                        span.textContent=" - Please enter a valid date of birth";
                        span.classList.add('redSpan');
                    }else{
                        legendDatum.classList.remove("redText");
                        span.textContent="*";
                        span.classList.remove('redSpan');
                    }
                break;

                default:
                    legendDatum.classList.remove("redText");
                        span.textContent="*";
                        span.classList.remove('redSpan');
                break;
            }
        }
    }



    });
});
