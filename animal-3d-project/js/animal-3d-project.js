// Structure
// ----------------------------------------------

var fullBodyIcon = document.querySelector(".col-xs-6 #fullBody");
var muscleIcon = document.querySelector(".col-xs-6 #muscle");
var skeletonIcon = document.querySelector(".col-xs-6 #skeleton");
var dropdown = document.querySelector(".container .dropdown-menu");
var animalDisplayText = document.querySelector(".container .display-3");
//var iframeTemplate = document.querySelector('iframe-template');
var results = document.querySelector("#sketchFabAPI");
var description = document.querySelector(".description p");
var home = document.querySelector(".navbar-brand");

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
home.addEventListener('click', bringMeHome);


// Event handlers
// ----------------------------------------------


function get3dImage(e) {
	e.preventDefault();
	popUp.classList = "loader";
	// utilize event delegation to find the specific li.id in order to request the api call based on the user's selection
	var action = e.target.closest('li').id;
	var url = "https://sketchfab.com/oembed?url=https://sketchfab.com/models/";
	switch(action) {
		case 'source-1':
			url = url + tiger.fullBody[0].sketchFabId;
			animalDisplayText.innerHTML = "TIGER";
			break;
		case 'source-2':
			url = url + horse.muscles[0].sketchFabId;
			animalDisplayText.textContent = "HORSE";
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
	popUp.classList = "loader";
	if (e.target.parentElement.dataset.category === "muscle") {
		description.innerHTML = tiger.muscles[e.target.parentElement.dataset.index].description;
	} else if (e.target.parentElement.dataset.category === "skeleton") {
		description.innerHTML = tiger.skeleton[e.target.parentElement.dataset.index].description;
	} else if (e.target.parentElement.dataset.category === "fullBody") {
		description.innerHTML = tiger.fullBody[e.target.parentElement.dataset.index].description;
	} else {
		return;
	}
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

function bringMeHome(e) {
	e.preventDefault();
	popUp.classList = "loader";
	animalDisplayText.innerHTML = "GIANT BUG";
	description.innerHTML = tiger.fullBody[0].description;
	var url = "https://sketchfab.com/oembed?url=https://sketchfab.com/models/721d2bd139bc4feeba307c1db715359c";
	$.getJSON(url, update3dImage);
}


// Update page
// ----------------------------------------------

function update3dImage(json) {
	results.innerHTML = json.html;
	closePopUp();
} 





