document.addEventListener('DOMContentLoaded', function() {
    const TOSDiv = document.querySelector('.TOSDiv');
    const leftDiv = document.querySelector('.leftDiv2');
    const button =document.querySelector('.continueButton');


    TOSDiv.addEventListener('click', function() {
      leftDiv.classList.toggle('leftDiv2JS');
      button.disabled = !button.disabled;
    });

    const links = TOSDiv.querySelectorAll('a');
            links.forEach(link => {
                link.addEventListener('click', function(event) {
                    event.stopPropagation();
                });
            });
  });

  