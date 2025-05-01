$(document).ready(function() {
  // Hide dropdown menu when mouse leaves the profile dropdown
  $('.profile').on('mouseleave', function() {
    $(this).find('.dropdown-menu').removeClass('show');
  });

  // Show dropdown menu when profile icon is clicked
  $('.profile .dropdown-toggle').on('click', function() {
    $(this).next('.dropdown-menu').toggleClass('show');
  });
});
(function ($) {
  "use strict";

  $(document).ready(function () {
    // Initialize form validation for login form
    $("#loginForm").validator().on("submit", function (event) {
      if (event.isDefaultPrevented()) {
        console.log("Form validation failed");
      } else {
        event.preventDefault();
        console.log("Form submitted successfully");
        window.location.href = "landing-page.html";
      }
    });

    // Initialize WOW.js for animations
    new WOW().init();

    // Fix navbar toggler to prevent redirect and ensure menu opens
    $('.navbar-toggler').on('click', function (event) {
      event.preventDefault(); // Prevent default behavior
      event.stopPropagation(); // Stop event propagation to parent elements
      $('#main-navbar').collapse('toggle'); // Manually toggle the menu
    });

    // Optional: Disable slicknav if it conflicts with Bootstrap
    if ($.fn.slicknav) {
      $('.navbar-nav').slicknav('destroy'); // Destroy slicknav if causing issues
    }
  });

  
})(jQuery);
