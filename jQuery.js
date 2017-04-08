
var resourceCentersCount = 0;
var resourceSupportCount = 0;
var resourceAcademicCount = 0;
var resourceEmergencyCount = 0;

$(document).ready(function(){


	// resources page that needs to hide/show the information it has

	$('#button-centers-hide').click(function() {
		resourceCentersCount++;
		if(resourceCentersCount % 2 == 0){
			$('.resource-centers-hidden').css("display", "");
		} else {
			$('.resource-centers-hidden').css("display", "block");
		}
	});

	$('#button-support-hide').click(function(){
		resourceSupportCount++;
		if(resourceSupportCount % 2 == 0){
			$('.resource-support-hidden').css("display", "");
		} else{
			$('.resource-support-hidden').css("display", "block");
		}
	})

	$('#button-academic-hide').click(function(){
		resourceAcademicCount++;
		if(resourceAcademicCount % 2 == 0){
			$('.resource-academic-hidden').css("display", "");
		} else{
			$('.resource-academic-hidden').css("display", "block");
		}
	})

	$('#button-emergency-hide').click(function(){
		resourceEmergencyCount++;
		if(resourceEmergencyCount % 2 == 0){
			$('.resource-emergency-hidden').css("display", "");
		} else{
			$('.resource-emergency-hidden').css("display", "block");
		}
	})

});

