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
			url = url + horse.id;
			animalDisplayText.innerHTML = "HORSE";
			break;
		case 'source-2':
			url = url + dragon.id;
			animalDisplayText.textContent = "DRAGON";
			break;
		case 'source-3':
			url = url + whale.id;
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


//----------------------- json data --------------------------//

var horse = {
	"id": '69bfcdf219ff4260881d5696042fa526'
};

var dragon = {
	"id": 'ed7d618dedb64ae7a450058cb444c666'
};


var whale = {
	"id": '522e811044bc4e09bf84431e6c1cc109'
};

