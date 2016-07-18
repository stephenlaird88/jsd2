
/* Assignment 2: Random Address Generator

Write a script that can generate random addresses.

1. As a first step, create arrays that contain dummy data for each of the following: 
   1. street number, 
   2. street name, 
   3. city name, 
   4. state name 
   5. postal code
2. Your script should randomly select one item from each of these arrays and then use them to construct a random address
3. Each time you run the script, it should print a new randomly-generated address to the console. 
4. For example: 1139 Grand Ave, Chicago, IL 60642 */



/* Psuedo Code: 
    - Create 5 arrays for street number, street name, city name, state name, and postal code. 
	- Create a getRandomInt helper function.
	- Create a generateRandomAddress function that does the following:
		* Assigns a random variable (let's say randomStreetNumber) and assigns it to your array streetNumber[random Function]. 
		  Using the random helper function will randomly generate a number and which is perfect for calling a random position in 
		  your array. Repeat this for each of the address arrays. 
	- Finally, use concetenation to combine and print the individual address variables that have been generated from the forEach function. 
*/


var streetNumber = [540, 1155, 154, 21853, 500];
var streetName = ["Washington St.", "Ellis St.", "Birchwood St.", "Tenderfoot Way", "Mission St."];
var cityName = ["San Francisco", "Los Angeles", "Anaheim", "Diamond Bar", "New York"];
var stateName = ["California", "New York", "Oregon", "Massachusetts", "Arizona"];
var postalCode = ["CA 94109", "NY 49830", "OR 92871", "MA 83809", "AZ 42987"];

function generateRandomAddress() {

	var randomStreetNumber = streetNumber[getRandomInt(0,4)];
	var randomStreetName = streetName[getRandomInt(0,4)];
	var randomCityName = cityName[getRandomInt(0,4)];
	var randomStateName = stateName[getRandomInt(0,4)];
	var randomPostalCode = postalCode[getRandomInt(0,4)];
	var randomAddress = randomStreetNumber + " " + randomStreetName + ", " + randomCityName + ", " + randomPostalCode;
	console.log(randomAddress);

}



// Helper function
// ------------------------------------------
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}