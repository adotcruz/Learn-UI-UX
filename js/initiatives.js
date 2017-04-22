
var diapSummaryCount = 0;
var divCommitteeCount = 0;
var diapUpdateCount = 0;
var divCommitteeEventsCount = 0;

$(document).ready(function(){


	// resources page that needs to hide/show the information it has

	$('#button-diap-hide').click(function() {
		diapSummaryCount++;
		if(diapSummaryCount % 2 == 0){
			$('.diap-summary-hidden').css("display", "");
		} else {
			$('.diap-summary-hidden').css("display", "block");
		}
	});

	$('#button-committee-hide').click(function(){
		divCommitteeCount++;
		if(divCommitteeCount % 2 == 0){
			$('.div-committee-hidden').css("display", "");
		} else{
			$('.div-committee-hidden').css("display", "block");
		}
	})

	$('#button-update-hide').click(function(){
		diapUpdateCount++;
		if(diapUpdateCount % 2 == 0){
			$('.diap-update-hidden').css("display", "");
		} else{
			$('.diap-update-hidden').css("display", "block");
		}
	})

	$('#button-events-hide').click(function(){
		divCommitteeEventsCount++;
		if(divCommitteeEventsCount % 2 == 0){
			$('.committee-events-hidden').css("display", "");
		} else{
			$('.committee-events-hidden').css("display", "block");
		}
	})

});

