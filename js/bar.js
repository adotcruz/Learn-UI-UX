$(document).ready(function(){
	var $window = $(window),
		$navbar = $('#navbar-data'),
		top = $navbar.offset().top,
		xstop = $('#xs-nav').offset().top;

	$window.scroll(function() {
		if($(window).width() > 767){
			$navbar.toggleClass('sticky', $window.scrollTop() > top + 5);
			if($(window).width() > 768){
				$('#xs-nav').removeClass('xs-sticky');
				$navbar.removeClass('xs-li-sticky');
			}
		} else {
			$navbar.removeClass('sticky');
			$('#xs-nav').toggleClass('xs-sticky', $window.scrollTop() > xstop);
			$navbar.toggleClass('xs-li-sticky', $window.scrollTop() > xstop);
		}
	});
});