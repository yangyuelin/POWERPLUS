(function ($) {
  "use strict";



  // page-scroll
  $('.page-scroll').bind('click', function (event) {
    var $anchor = $(this);
    var headerH = '80';
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top - headerH + "px"
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
  });

  //counter up
  $('.counter').counterUp({
    delay: 10,
    time: 2000
  });

  //masonry js
  $('.grid').masonry({
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    percentPosition: true
  });
  //gallery js
  $('.gallery').each(function () {
    $(this).magnificPopup({
      delegate: 'a',
      type: 'image',
      gallery: {
        enabled: true
      }
    });
  });

  if ($('.img-gal').length > 0) {
    $('.img-gal').magnificPopup({
      type: 'image',
      gallery: {
        enabled: true
      }
    });
  }

  $('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    speed: 500,
    infinite: true,
    asNavFor: '.slider-nav-thumbnails',
    autoplay: false,
    autoplaySpeed: 4000,
    touchThreshold: 2000,
    pauseOnFocus: true,
    dots: false,
  });




  $('.slider-nav-thumbnails').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider',
    focusOnSelect: true,
    infinite: true,
    prevArrow: false,
    nextArrow: false,
    centerMode: true,
    autoplaySpeed: 3000,
    touchThreshold: 1000,
    speed: 500,

    // responsive: [
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       centerMode: false,
    //     }
    //   }
    // ]

  });

  $(".review_part").click(function (e) { 
    e.preventDefault();
    
  });



  //UPDATED 

  if (document.getElementById('default-select, .nice-select')) {
    $('select').niceSelect();
  }
  $(document).ready(function () {
    $('select').niceSelect();
  });
  //------- Mailchimp js --------//  
  function mailChimp() {
    $('#mc_embed_signup').find('form').ajaxChimp();
  }
  mailChimp();


  $('#index_tag').click(function(){
		$('html,body').animate({scrollTop:$('#index').offset().top}, 800);
	});
	
	$('#about_tag').click(function(){
		$('html,body').animate({scrollTop:$('#about').offset().top}, 800);
	});
	$('#service_tag').click(function(){
		$('html,body').animate({scrollTop:$('#service').offset().top}, 800);
	});
	$('#contact_tag').click(function(){
		$('html,body').animate({scrollTop:$('#contact').offset().top}, 800);
	});
	$('#work_tag').click(function(){
		$('html,body').animate({scrollTop:$('#work').offset().top}, 800);
	});


  if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    $(".navbar-nav li a").click(function (e) { 
      e.preventDefault();
      $(".navbar-collapse").removeClass("show");
      
    });
  }
  else {
     
  }


    // menu fixed js code
    $(window).scroll(function () {
      var window_top = $(window).scrollTop() + 1;
      if (window_top > 50) {
        $('.main_menu').addClass('menu_fixed animated fadeInDown');
      } else {
        $('.main_menu').removeClass('menu_fixed animated fadeInDown');
      }
    });
    if (document.getElementById('default-select')) {
      $('select').niceSelect();
    }

}(jQuery));


