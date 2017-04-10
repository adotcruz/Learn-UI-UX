$(document).ready(function(){
	var $window = $(window),
		$navbar = $('#navbar-data'),
		top = $navbar.offset().top,
		xstop = $('#xs-nav').offset().top;

	$window.scroll(function() {
		$navbar.toggleClass('sticky', $window.scrollTop() > top + 5);
		// $('#xs-nav').toggleClass('sticky', $window.scrollTop() > xstop + 65);
	});
});