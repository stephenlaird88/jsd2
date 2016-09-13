// Structure
// ----------------------------------------------

var fullBodyIcon = document.querySelector(".col-xs-6 #fullBody");
var muscleIcon = document.querySelector(".col-xs-6 #muscle");
var skeletonIcon = document.querySelector(".col-xs-6 #skeleton");
var dropdown = document.querySelector(".container .dropdown");
var animalDisplayText = document.querySelector(".container .display-3");
//var iframeTemplate = document.querySelector('iframe-template');
var results = document.querySelector("#sketchFabAPI");

// div popup
var popUpThumbnails = document.querySelector("#popUp .container");
var popUp = document.getElementById('popUp');
var close = document.querySelector('a.closePopUp');

// handlebars
var popUpTemplate = document.querySelector("#popUp-template");



// Setup
//-------------------------------------------------------

newImage: "";

// Events
// ----------------------------------------------

fullBodyIcon.addEventListener('click', getPopUp);
muscleIcon.addEventListener('click', getPopUp);
skeletonIcon.addEventListener('click', getPopUp);
close.addEventListener('click', closePopUp);
dropdown.addEventListener('click', get3dImage);
popUpThumbnails.addEventListener('click', getDetailed3dImage);


// Event handlers
// ----------------------------------------------


function get3dImage(e) {
	e.preventDefault();
	// utilize event delegation to find the specific li.id in order to request the api call based on the user's selection
	var action = e.target.closest('li').id;
	var url = "https://sketchfab.com/oembed?url=https://sketchfab.com/models/";
	switch(action) {
		case 'source-1':
			url = url + tiger.fullBody[0].sketchFabId;
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

function getDetailed3dImage(e) {
	e.preventDefault();
	closePopUp();
	var url = "https://sketchfab.com/oembed?url=https://sketchfab.com/models/";
	var sketchFabId = e.target.parentElement.dataset.sketchfabid;
	url = url + sketchFabId;
	$.getJSON(url, update3dImage);
}

function getPopUp(e) {
	e.preventDefault();
	popUp.classList = "";
	var action = e.target.closest('section').id;
	switch(action) {
		case 'muscle':
			// handlebars to dynamically create new html
			var template = Handlebars.compile(popUpTemplate.innerHTML);
			popUpThumbnails.innerHTML = template(tiger.muscles);
			break;
		case 'fullBody':
			// handlebars to dynamically create new html
			var template = Handlebars.compile(popUpTemplate.innerHTML);
			popUpThumbnails.innerHTML = template(tiger.fullBody);
			break;
		case 'skeleton':
			// handlebars to dynamically create new html
			var template = Handlebars.compile(popUpTemplate.innerHTML);
			popUpThumbnails.innerHTML = template(tiger.skeleton);
			break;		
	}
}

function closePopUp() {
    popUp.classList.add('hidden');
}



// Update page
// ----------------------------------------------

function update3dImage(json) {
	results.innerHTML = json.html;
} 





