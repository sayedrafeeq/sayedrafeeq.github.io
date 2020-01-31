// Stellar - Responsive Web Portal

(function($) {
    "use strict"; // Start of use strict
	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollToTop').fadeIn(100);
		} else {
			$('.scrollToTop').fadeOut(100);
		}
	});
	
	//Click event to scroll to top
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});	

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })
	
	// Navigation Active Class
	var url = window.location;
	$('ul.nav a[href="'+ url +'"]').parent().addClass('active');
	$('ul.nav a').filter(function() {
		 return this.href == url;
	}).parent().addClass('active');
	
})(jQuery); // End of use strict