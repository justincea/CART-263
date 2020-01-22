

/********************************************************************

Class 3 - Week 3
Justin Cea

jQuery
*********************************************************************/
"use strict";
let $divs = $('div');

  $(document).ready(setup);
    console.log("Loaded");

  function setup() {
    $('div').on('click',divClicked); // Add a click listener to ever div

}
    function divClicked() {
      $(this).fadeOut(); // Tell the div cliked to fade out
    }
