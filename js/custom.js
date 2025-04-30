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

    // متغيرات القائمة
    const navbarToggler = $('.navbar-toggler');
    const togglerIcon = navbarToggler.find('i');
    const mobileMenu = $('.mobile-menu');
    const closeMenu = $('.close-menu');
    const menuBackdrop = $('.mobile-menu-backdrop');
    const body = $('body');
      
    // الأيقونات
    const menuIcon = 'fa-bars'; // أيقونة البرجر
    const closeIcon = 'fa-times'; // أيقونة الإغلاق
    
    // فتح القائمة
    navbarToggler.on('click', function(e) {

      e.preventDefault();
      mobileMenu.addClass('show');
      menuBackdrop.addClass('show');
      body.addClass('menu-open');
      
      // تغيير الأيقونة إلى إغلاق
      togglerIcon.removeClass(menuIcon).addClass(closeIcon);
    });
    
    // إغلاق القائمة
    function closeMobileMenu() {
      mobileMenu.removeClass('show');
      menuBackdrop.removeClass('show');
      body.removeClass('menu-open');
      
      // تغيير الأيقونة إلى برجر
      togglerIcon.removeClass(closeIcon).addClass(menuIcon);
    }
    
    // إغلاق بالزر
    closeMenu.on('click', function(e) {
      
      e.preventDefault();
      closeMobileMenu();
    });
    
    // إغلاق بالتعتيم
    menuBackdrop.on('click', function(e) {
      e.preventDefault();
      closeMobileMenu();
    });
    
    // إغلاق عند النقر على رابط
    $('.mobile-menu li a').on('click', function(e) {
      if ($(this).attr('href').startsWith('#')) {
        e.preventDefault();
        const target = $($(this).attr('href'));
        if (target.length) {
          closeMobileMenu();
          setTimeout(() => {
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 800);
          }, 300);
        }
      } else {
        closeMobileMenu();
      }
    });
    
    // إخفاء القائمة عند التمرير
    $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
        $('.navbar').addClass('navbar-scrolled');
      } else {
        $('.navbar').removeClass('navbar-scrolled');
      }
    });
  });
})(jQuery);