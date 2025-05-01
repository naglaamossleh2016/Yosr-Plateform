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
        window.location.href = "index.html";
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
// عند تحميل الصفحة
// تنشيط القائمة الطافية
