// Setup
// ------------------------------------------
var options = {
    enableHighAccuracy: true,
    maximumAge: 3000,
    timeout: 2700
};


// Structure
// ------------------------------------------
var button    = document.querySelector('main button');
var locations = document.querySelector('main .locations');
var error     = document.querySelector('main .error');


// Events
// ------------------------------------------
button.addEventListener('click', clickButton);


// Event Handlers
// ------------------------------------------
function clickButton(event) {
	console.log('getLocation', event);
}


// Geolocation callback functions
// ------------------------------------------




// Update page functions
// ------------------------------------------




// Callback when Google Maps has loaded
// ------------------------------------------




// Add / update the location marker
// ------------------------------------------
