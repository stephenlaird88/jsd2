
/* Psuedo Code: 
    - Create 5 arrays for street number, street name, city name, state name, and postal code. 
	- Create a getRandomInt helper function.
	- Create a generateAddress function that does the following:
		* Assigns a random variable (let's say randomStreetNumber) and assigns it to your array streetNumber[random Function]. 
		  Using the random helper function will randomly generate a number and which is perfect for calling a random position in 
		  your array. Repeat this for each of the address arrays. 
	- Finally, use concetenation to combine and print the individual address variables that have been generated from the forEach function. 
*/


// Structure
// ------------------------------------------
var button    = document.querySelector('main button');
var addresses = document.querySelector('main .addresses');


// Events
// ------------------------------------------
button.addEventListener('click', generateAddress);


// Setup
// ------------------------------------------
// TODO: create your arrays here (street, city, state, etc)
var streetNumber = [540, 1155, 154, 21853, 500];
var streetName = ["Washington St.", "Ellis St.", "Birchwood St.", "Tenderfoot Way", "Mission St."];
var cityName = ["San Francisco", "Los Angeles", "Anaheim", "Diamond Bar", "New York"];
var stateName = ["California", "New York", "Oregon", "Massachusetts", "Arizona"];
var postalCode = ["CA 94109", "NY 49830", "OR 92871", "MA 83809", "AZ 42987"];


// Event Listeners
// ------------------------------------------
function generateAddress() {
	// TODO: randomly select one item from each of these arrays 
	//       and then use them to construct a random address
	var randomStreetNumber = streetNumber[getRandomInt(0,streetNumber.length-1)];
	var randomStreetName = streetName[getRandomInt(0,streetName.length-1)];
	var randomCityName = cityName[getRandomInt(0,cityName.length-1)];
	var randomStateName = stateName[getRandomInt(0,stateName.length-1)];
	var randomPostalCode = postalCode[getRandomInt(0,postalCode.length-1)];
	var address = randomStreetNumber + " " + randomStreetName + ", " + randomCityName + ", " + randomPostalCode;
	console.log(address);
	addAddress(address);
}


// Update page functions
// ------------------------------------------
function addAddress(address) {
	var li = document.createElement('li');
	li.innerHTML = address;
	addresses.appendChild(li);
}


// Helper function
// ------------------------------------------
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

