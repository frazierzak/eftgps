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

class Map {
	constructor (name) {
		this.name = name;
	}
	toString() {
		return this.name;
	}
}

// Firestore data converter
mapConverter = {
	toFirestore: function(map) {
		return {
			name: map.name
		}
	},
	fromFirestore: function(snapshot, options){
		const data = snapshot.data(options);
		return new Map(data.name)
	}
}

db.collection("maps").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
        console.log(doc.data());
    });
});