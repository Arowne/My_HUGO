(function ($) {
  "use strict"; // Start of use strict

  let navBar = document.querySelector('.sidenav');
  let triggerIndex = 0;

  console.log(triggerIndex);


  $('.menu-trigger').click(function () {

    triggerIndex += 1;

    if (triggerIndex % 2 != 0) {
      navBar.classList.remove('d-none');
    }
    else {
      navBar.classList.add('d-none');
    }

  })
})(jQuery); // End of use strict


let organigramDisplay = document.querySelector('.organigram-display');
let director = document.querySelector('.Director');
let deputy  = document.querySelector('.Deputy');
let bottomTree  = document.querySelectorAll('.col-sm-3');

organigramDisplay.append(director);
organigramDisplay.append(deputy);

for (let index = 0; index < bottomTree.length; index++) {
  const element = bottomTree[index];
  organigramDisplay.append(element);
  
}