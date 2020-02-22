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

// Get a reference to the firebase storage
var storage = firebase.storage();

function storeData() {
	var button = document.getElementById('uploadButton');
	var progress = document.getElementById('uploadProgress');
	var map = document.getElementById("map").value;
	var name = document.getElementById("name").value;
	var desc = document.getElementById("desc").value;
	var date = document.getElementById("date").value;
	var file = document.querySelector('#map_image').files[0];
	const file_name = (+new Date()) + '-' + file.name;
	const metadata = { contentType: file.type };
	// const task = storageRef.child(file_name).put(file, metadata);
	var storageRef = storage.ref("map_images/" + file_name);
	const uploadTask = storageRef.put(file, metadata);

	uploadTask.on('state_changed', loadUpload, errUpload, completeUpload);
	//show progress  
	function loadUpload(data) {
	    var percent = (data.bytesTransferred / data.totalBytes) * 100;
	    progress.value = percent;
	}

	//On error    
	function errUpload(err) {
	    console.log('error');
	    console.log(err);
	}

	//On success  
	function completeUpload(data) {
	    console.log('success');
	    // console.log(data);
	    uploadTask
	    .then(snapshot => snapshot.ref.getDownloadURL())
		.then((url) => {
			var doc_name = (+new Date()) + '-' + name;
			db.collection(map).doc(doc_name).set({
				name: name,
				desc: desc,
				date: date,
				file_loc: url
			})
		})
	}
}

// Get a reference to the database service
var db = firebase.firestore();

$('.list_of_maps').each(function(i, obj) {
	const list_div = this.id;
	console.log('Pulling Maps for '+ list_div);
    db.collection(list_div).get().then(function(querySnapshot) {
    	querySnapshot.forEach(function(doc) {
    		obj.innerHTML += '<a class="map_listing" href='+ doc.data().file_loc +'><div class="map_name_date"><p class="map_name">'+ doc.data().name +'</p><p class="map_date">'+ doc.data().date +'</p></div><p class="map_desc">'+ doc.data().desc +'</p></a>'
    	})
    })

});