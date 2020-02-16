// var mymap = L.map('mapid').setView([51.505, -0.09], 13);


$( ".minimize_header" ).click(function() {
	$( "nav" ).slideToggle();
	
	if ($( ".minimize_header" ).hasClass("show")) {
		$( ".minimize_header" ).removeClass("show");
		$( ".minimize_header" ).addClass("hide");
		$( ".minimize_header" ).text("Show Navigation");
	} else {
		$( ".minimize_header" ).removeClass("hide");
		$( ".minimize_header" ).addClass("show");
		$( ".minimize_header" ).text("Hide Navigation");
	}
});