console.log('hello sticky notes');


// Elements 
// -------------------------
var button = document.querySelector("button");
var container = document.querySelector(".container");
var boxColor = document.querySelector(".box-color");
var boxNote = document.querySelector(".box-note");


// Event Listener
// ---------------------------

window.addEventListener('load', function() {

	var noteCount = 1;
	button.addEventListener('click', function() {
		console.log('button clicked');

		// Get data from user
		var color = boxColor.value;
		var note = boxNote.value;

		// Create Elements
		var box = document.createElement("div");

		// Add content/attributes
		box.className = "box";
		box.innerHTML = noteCount + ". " + note;
		box.style.backgroundColor = color;

		// Append to DOM
		container.appendChild(box);

		noteCount++;

	});

});


