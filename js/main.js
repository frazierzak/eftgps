// var mymap = L.map('mapid').setView([51.505, -0.09], 13);
var map = L.map('customs_map', {
    crs: L.CRS.Simple
});
var bounds = [[0,0], [1163,2400]];
var image = L.imageOverlay('maps/customs_1_27_marvelin.png', bounds).addTo(map);
map.fitBounds(bounds);

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