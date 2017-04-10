$(document).ready(function(){
	var $window = $(window),
		$navbar = $('#navbar-data'),
		top = $navbar.offset().top,
		xstop = $('#xs-nav').offset().top;

	$window.scroll(function() {
		if($(window).width() > 767){
			$navbar.toggleClass('sticky', $window.scrollTop() > top + 5);
		} else {
			$('#xs-nav').toggleClass('xs-sticky', $window.scrollTop() > xstop);
			$navbar.toggleClass('xs-li-sticky', $window.scrollTop() > xstop);
		}
	});
});