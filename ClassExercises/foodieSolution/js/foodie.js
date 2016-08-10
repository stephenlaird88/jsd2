// Elements
// ------------------------------------
var form = document.querySelector("form");
var zip = document.querySelector("form .zip");
var results = document.querySelector(".results");


// Event
// ------------------------------------
form.addEventListener('submit', getRestaurants);


// Event Handler 
// ------------------------------------
function getRestaurants(event) {
	event.preventDefault();

	var search = zip.value;
	console.log(search);

	var url = "http://opentable.herokuapp.com/api/restaurants?zip=" + search;

	$.getJSON(url, updateRestaurants);
}

// Update page
// ------------------------------------
function updateRestaurants(json) {
	console.log('updateRestaurants',json);

	// clears out the old results
	results.innerHTML = '';

	// add new result for each item in array
	json.restaurants.forEach(createRestaurant);

	var source = document.querySelector("#restaurant-template");
	console.log(source);
}

function createRestaurant(i) {

	var li = document.createElement("li");

	var template = 
		'<img src="' + i.image_url +'">' +
		'<h2>' + i.name +'</h2>' +
		'<p>' + i.address +'</p>';

	//console.log(template);
	li.innerHTML = template;
	results.appendChild(li);

}

/*
function createRestaurant(restaurant) {

	// Step 1 - create elements
	var li = document.createElement("li");
	var img = document.createElement("img");
	var h2 = document.createElement("h2");
	var p = document.createElement("p");

	// Step 2 - add content / attributes
	img.src = restaurant.image_url;
	h2.textContent = restaurant.name;
	p.textContent = restaurant.address;

	// Step 3 - append to parents
	results.appendChild(li);
	li.appendChild(img);
	li.appendChild(h2);
	li.appendChild(p);
}

*/

	




