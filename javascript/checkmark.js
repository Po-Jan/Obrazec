document.addEventListener('DOMContentLoaded', function() {
    const divOptional = document.querySelector('.divOptional');
    const leftDiv = document.querySelector('.leftDiv');


    divOptional.addEventListener('click', function() {
      leftDiv.classList.toggle('leftDivJS');
      
    });
  });