function pet_care_zone_openNav() {
  jQuery(".sidenav").addClass('show');
}
function pet_care_zone_closeNav() {
  jQuery(".sidenav").removeClass('show');
}

( function( window, document ) {
  function pet_care_zone_keepFocusInMenu() {
    document.addEventListener( 'keydown', function( e ) {
      const pet_care_zone_nav = document.querySelector( '.sidenav' );

      if ( ! pet_care_zone_nav || ! pet_care_zone_nav.classList.contains( 'show' ) ) {
        return;
      }

      const elements = [...pet_care_zone_nav.querySelectorAll( 'input, a, button' )],
        pet_care_zone_lastEl = elements[ elements.length - 1 ],
        pet_care_zone_firstEl = elements[0],
        pet_care_zone_activeEl = document.activeElement,
        tabKey = e.keyCode === 9,
        shiftKey = e.shiftKey;

      if ( ! shiftKey && tabKey && pet_care_zone_lastEl === pet_care_zone_activeEl ) {
        e.preventDefault();
        pet_care_zone_firstEl.focus();
      }

      if ( shiftKey && tabKey && pet_care_zone_firstEl === pet_care_zone_activeEl ) {
        e.preventDefault();
        pet_care_zone_lastEl.focus();
      }
    } );
  }
  pet_care_zone_keepFocusInMenu();
} )( window, document );

jQuery(document).ready(function() {
	var owl = jQuery('#top-slider .owl-carousel');
		owl.owlCarousel({
			margin: 0,
			nav: false,
			autoplay:true,
			autoplayTimeout:3000,
			autoplayHoverPause:true,
			loop: true,
      dots:false,
			navText : ['<i class="fa fa-lg fa-chevron-left" aria-hidden="true"></i>','<i class="fa fa-lg fa-chevron-right" aria-hidden="true"></i>'],
			responsive: {
			  0: {
			    items: 1
			  },
			  600: {
			    items: 1
			  },
			  1024: {
			    items: 1
			}
		}
	})
})

jQuery(document).ready(function() {
  var owl = jQuery('#pet-product .owl-carousel');
    owl.owlCarousel({
      margin: 30,
      nav: false,
      autoplay:true,
      autoplayTimeout:3000,
      autoplayHoverPause:true,
      loop: true,
      dots:false,
      navText : ['<i class="fa fa-lg fa-chevron-left" aria-hidden="true"></i>','<i class="fa fa-lg fa-chevron-right" aria-hidden="true"></i>'],
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 2
        },
        1024: {
          items: 2
      }
    }
  })
    window.addEventListener('load', (event) => {
    jQuery(".loading").delay(2000).fadeOut("slow");
  });
})

var btn = jQuery('#button');

jQuery(window).scroll(function() {
  if (jQuery(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  jQuery('html, body').animate({scrollTop:0}, '300');
});

jQuery(window).scroll(function() {
  var data_sticky = jQuery('.main_header').attr('data-sticky');

  if (data_sticky == "true") {
    if (jQuery(this).scrollTop() > 1){  
      jQuery('.main_header').addClass("stick_header");
    } else {
      jQuery('.main_header').removeClass("stick_header");
    }
  }
});
