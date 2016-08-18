/*localStorage.setItem('name', 'stephen');

localStorage.setItem('bday', '1988');

var myName = localStorage.getItem('name');

var myBday = localStorage.getItem('bday');


var car = {
	make: "Subaru",
	model: "STI",
	year: "2016"
};

// Before saving, convert your json to a string

var carString = JSON.stringify(car);

// Save object in local storage

localStorage.setItem('car', carString);

// retrieve object from local storage

var myCar = localStorage.getItem('car');

// converts from String to a json object

myCar = JSON.parse(myCar);

*/



// Elements

//----------------

var button = document.querySelector("button");
var color = document.querySelector(".color");
var model = document.querySelector(".model");
var p = document.querySelector("p");

// Events
//----------------

window.addEventListener('load', updateCar);
button.addEventListener('click', saveCar);

// Event Handler
//---------------

function saveCar(e) {
	console.log('saveCar');
	console.log(color.value);

	var car = {
		model: model.value,
		color: color.value
	}

	// convert to string
	car = JSON.stringify(car);

	// save to local storage
	localStorage.setItem('car', car);
	updateCar();

}

// Clear data

function clearCar() {
	localStorage.removeItem('car');
}

// Update Page
//-----------------

function updateCar() {

	// get object from local storage
	var car = localStorage.getItem('car');

	// validation check if car is null on the first time the page is loaded
	if (car == null) {
		return;
	}
	// convert to an object
	car = JSON.parse(car);
	p.textContent = car.color + " " + car.model;
}

