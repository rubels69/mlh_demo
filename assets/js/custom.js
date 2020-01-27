$(document).ready(function() {
 
    
    
    
/*======== Currency JS =========*/
    
    $("ul.currency li").click(function(){
        $(" ul.show_bn").toggle();
    });
    
    
    
    
    
  $(".feedback_slider").owlCarousel({
        items: 1,
        autoplay: true,
        loop: true,
        nav: false,
        /*navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"], */
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        mouseDrag: false
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });  
    
  $(".hero_slider").owlCarousel({
        items: 1,
        autoplay: true,
        loop: true,
        nav: false,
        /*navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"], */
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        mouseDrag: true
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });

    
/* ========= For Responsive Menu 
    
    $(".navbar-toggle").click(function(){
        $(this).hide();
    });
    
    $(".navbar-toggle").click(function(){
        $(".mobile_menu i").show();
    });
    
========= */

    $(".navbar-toggle").click(function(){
        $("div.mainmenu").toggleClass("mobMenu");
    });


/* =======
    
    $(".mobile_menu i").click(function(){
        $("div.mainmenu").hide();
    });
    
    $(".mobile_menu i").click(function(){
        $(this).hide();
    });
    
    $(".mobile_menu i").click(function(){
        $(".navbar-toggle").show();
    });
========== */ 
  
/*========== Sticky Header JS ===========*/
    
$(window).scroll(function(){
  if ($(window).scrollTop() >= 1) {
    $('.navMenu').addClass('fixedMenu');
      
   }
   else {
    $('.navMenu').removeClass('fixedMenu');
   }
});
    
    
    
    
    
  
    
});