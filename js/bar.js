$(document).ready(function(){
	var $window = $(window),
		$navbar = $('#navbar-data'),
		top = $navbar.offset().top;

	$window.scroll(function() {
		$navbar.toggleClass('sticky', $window.scrollTop() > top + 65);
	});
});