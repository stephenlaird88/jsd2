// Setup
// ------------------------------------------

// map options
var options = {
	center: { lat: 36.7783, lng: -119.4179 },
	zoom: 5,
    enableHighAccuracy: true,
    maximumAge: 3000
   // timeout: 2700
};



// Structure
// ------------------------------------------
var button     = document.querySelector('main button');
var mapEl	   = document.querySelector("#geolocation");
var locations  = document.querySelector('main .locations');
var error      = document.querySelector('main .error');



// Events
// ------------------------------------------
button.addEventListener('click', clickCurrentPosButton);


// Event Handlers
// ------------------------------------------
function clickCurrentPosButton(event) {
	console.log('getLocation', event);
	// use the geolocation api to get the current position
	// setup the callback for when position is determined
	navigator.geolocation.getCurrentPosition(geoSuccess);
}


// Geolocation callback functions
// ------------------------------------------

// callback function to be called when position is determined
// recieves a position object as 1st argument
function geoSuccess(position) {
	console.log("geoSuccess", position);
	// extract the lat & long from the position/coordinate object
	var latitude = position.coords.latitude;
	var longitude = position.coords.longitude;

	// put a new marker on the map
	var marker = new google.maps.Marker({
		map: map,
		position: {
			lat: latitude,
			lng: longitude
		}
	})

	// re-center and zoom in the map with your location
	map.setCenter( { lat: latitude, lng: longitude } ); 
	map.setZoom(17);

	// call createDisplayCoordinates to display coordinates on page
	createDisplayCoordinates(latitude, longitude);
}


// Update page functions
// ------------------------------------------

function createDisplayCoordinates(latitude, longitude) {
	console.log("createDisplayCoordinates");
	// Step 1: create elements
    var li = document.createElement("li");
    // Step 2: add content / attributes
    li.textContent = latitude + ", " + longitude;
    // Step 3: append to parent
    locations.appendChild(li);
}


// Callback when Google Maps has loaded
// ------------------------------------------

function initMap() {
	console.log("initMap");
	// create a new google map object
	var map = new google.maps.Map(mapEl, options);
	googleMapsDemo();
}


// Add / update the location marker
// ------------------------------------------


// ------------------------------------------------------ //
//           Demo 2: Google Maps JavaScript API
// ------------------------------------------------------ //
function googleMapsDemo() {
	console.log("googleMapsDemo");

	// Elements
	// --------------
	var el = document.querySelector('#maptest');

	// map options
	// --------------
	var options = {
		center: { lat: 37.7920, lng: -122.3980 },
		zoom: 15
	};

	// create a new google map object
	var map = new google.maps.Map(el, options);

	// create a marker on the map
	var marker = new google.maps.Marker({
		map: map,
		position: { lat: 37.79541, lng: -122.393505 }
	});

}