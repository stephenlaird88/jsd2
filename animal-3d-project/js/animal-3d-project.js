// Structure
// ----------------------------------------------

var moviesIcon = document.querySelector(".col-xs-6 #movies");
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
var popUpMovieTemplate = document.querySelector("#popUpMovies-template");



// Setup
//-------------------------------------------------------



// Events
// ----------------------------------------------

moviesIcon.addEventListener('click', getPopUp);
fullBodyIcon.addEventListener('click', getPopUp);
muscleIcon.addEventListener('click', getPopUp);
skeletonIcon.addEventListener('click', getPopUp);
close.addEventListener('click', closePopUp);
dropdown.addEventListener('click', get3dImage);
popUpThumbnails.addEventListener('click', getDetailed3dImage);
home.addEventListener('click', bringMeHome);


// Event handlers
// ----------------------------------------------

// this function is fired when the user clicks an animal from the drop-down
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
			popUpThumbnails.dataset.animalType = "tiger";
			break;
		case 'source-2':
			url = url + horse.fullBody[0].sketchFabId;
			animalDisplayText.textContent = "HORSE";
			popUpThumbnails.dataset.animalType = "horse";
			break;
	}	
	$.getJSON(url, update3dImage);
}

// this function is fired when the user clicks a detailed muscle, skeleton, or full-body thumbnail from the pop-up overlay
function getDetailed3dImage(e) {
	e.preventDefault();
	popUp.classList = "loader";
	// using animalType to create the dependency between animal and category
	var animalType = popUpThumbnails.dataset.animalType;
	// using data attributes of animalType and category to determine the right description to dynamically change
	if (e.target.parentElement.dataset.category === "muscle") {
		description.innerHTML = animals[animalType].muscles[e.target.parentElement.dataset.index].description;
	} else if (e.target.parentElement.dataset.category === "skeleton") {
		description.innerHTML = animals[animalType].skeleton[e.target.parentElement.dataset.index].description;
	} else if (e.target.parentElement.dataset.category === "fullBody") {
		description.innerHTML = animals[animalType].fullBody[e.target.parentElement.dataset.index].description;
	} else {
		return;
	}
	var url = "https://sketchfab.com/oembed?url=https://sketchfab.com/models/";
	var sketchFabId = e.target.parentElement.dataset.sketchfabid;
	url = url + sketchFabId;
	$.getJSON(url, update3dImage);
}

// this function is fired when the user clicks one of the movies, full-body, muscle, or skeleton categories
// this generates the pop-up overlay along with the appropriate thumbnails to show based on the animal selection
function getPopUp(e) {
	e.preventDefault();
	popUp.classList = "";
	var action = e.target.closest('section').id;
	switch(action) {
		case 'movies':
			// handlebars to dynamically create new html
			// this pulls from a different handlebars template compared to the other categories
			var template = Handlebars.compile(popUpMovieTemplate.innerHTML);
			popUpThumbnails.innerHTML = template(animals[popUpThumbnails.dataset.animalType].movies);
			break;		
		case 'muscle':
			// handlebars to dynamically create new html
			var template = Handlebars.compile(popUpTemplate.innerHTML);
			popUpThumbnails.innerHTML = template(animals[popUpThumbnails.dataset.animalType].muscles);
			break;
		case 'fullBody':
			// handlebars to dynamically create new html
			var template = Handlebars.compile(popUpTemplate.innerHTML);
			popUpThumbnails.innerHTML = template(animals[popUpThumbnails.dataset.animalType].fullBody);
			break;
		case 'skeleton':
			// handlebars to dynamically create new html
			var template = Handlebars.compile(popUpTemplate.innerHTML);
			popUpThumbnails.innerHTML = template(animals[popUpThumbnails.dataset.animalType].skeleton);
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





