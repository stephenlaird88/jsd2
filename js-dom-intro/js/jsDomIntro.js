// Structure
// ------------------------------------------
var form = document.querySelector("body form");
var input = document.querySelector(".new-thing");
var list = document.querySelector("#fav-list");
var button = document.querySelector(".new-thing-button");



// Events
// ------------------------------------------
form.addEventListener('submit', createNewThing);



// Event Listeners
// ------------------------------------------

// All this needs to do is take the value you typed in the form and save it



function createNewThing(e) {
	e.preventDefault();
	console.log('createNewThing');
	var newThing = document.createElement("li");
	newThing.innerHTML = input.value;
	list.appendChild(newThing);

}


// Update Page function
// ------------------------------------------


/*
function addToList(newThing) {
	console.log('addToList');

}

*/