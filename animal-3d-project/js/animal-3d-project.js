// Structure
// ----------------------------------------------

var animalIcon = document.querySelector(".col-xs-6");
var dropdown = document.querySelector(".container .dropdown");
var animalDisplayText = document.querySelector(".container .display-3");
//var iframeTemplate = document.querySelector('iframe-template');
var results = document.querySelector("#sketchFabAPI");

// div popup
var popUp = document.getElementById('popUp');
var close = document.querySelector('a.closePopUp');



// Setup
//-------------------------------------------------------

newImage: "";

// Events
// ----------------------------------------------

animalIcon.addEventListener('click', getPopup);
close.addEventListener('click', closePopUp);
dropdown.addEventListener('click', get3dImage);


// Event handlers
// ----------------------------------------------


function get3dImage(e) {
	e.preventDefault();
	// utilize event delegation to find the specific li.id in order to request the api call based on the user's selection
	var action = e.target.closest('li').id;
	var url = "https://sketchfab.com/oembed?url=https://sketchfab.com/models/";
	switch(action) {
		case 'source-1':
			url = url + tiger.sketchFabId;
			animalDisplayText.innerHTML = "TIGER";
			break;
		case 'source-2':
			url = url + dragon.sketchFabId;
			animalDisplayText.textContent = "DRAGON";
			break;
		case 'source-3':
			url = url + whale.sketchFabId;
			animalDisplayText.textContent = "GIANT WHALE";
			break;
	}
	$.getJSON(url, update3dImage);
}


// Update page
// ----------------------------------------------

function update3dImage(json) {
	results.innerHTML = json.html;
} 

function getPopup() {
	console.log("clicked");
	popUp.classList = "";
}

function closePopUp() {
    popUp.classList.add('hidden');
}



