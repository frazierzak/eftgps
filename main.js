/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
	var x = document.getElementById("nav");
	if (x.className === "nav") {
		x.className += " responsive";
	} else {
		x.className = "nav";
	}
};

function expand(d) {
 //    var x = document.getElementById(d);
	// if (x.className === "map_list") {
	// 	x.className += " full_width";
	// } else {
	// 	x.className = "map_list";
	// }
}

$(".button").on('click', function(event){
    event.stopPropagation();
    event.stopImmediatePropagation();
    var x = document.getElementById("nav");
	if (x.className === "nav") {
		x.className += " responsive";
	} else {
		x.className = "nav";
	}
});

// Get a reference to the database service
var db = firebase.firestore();

const list_div = document.querySelector("#customs_maps");

db.collection("Customs Maps").get().then(function(querySnapshot) {
	querySnapshot.forEach(function(doc) {
		list_div.innerHTML += '<a class="map_listing" href='+ doc.data().link +'><div class="map_name_date"><p class="map_name">'+ doc.data().name +'</p><p class="map_date">'+ doc.data().date +'</p></div><p class="map_desc">'+ doc.data().desc +'</p></a>'
	});
});