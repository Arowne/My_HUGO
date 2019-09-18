(function($) {
  "use strict"; // Start of use strict

  let navBar = document.querySelector('.sidenav');
  let triggerIndex = 0;

  console.log(triggerIndex);


  $('.menu-trigger').click(function () {

    triggerIndex += 1;

    if(triggerIndex % 2 != 0) {
      navBar.classList.remove('d-none');
    }
    else {
      navBar.classList.add('d-none');
    }
    
  })
})(jQuery); // End of use strict
