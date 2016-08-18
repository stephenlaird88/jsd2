
// Set-up
//-------------------

// Establish a connection with Firebase

var firebaseReference = new Firebase("https://jsd2-30f31.firebaseio.com/");


// Elements
//--------------------
var button = document.querySelector("button");


// Events
//--------------------
button.addEventListener('click', saveChanges);
window.addEventListener('load', restoreChanges);

function restoreChanges() {
	firebaseReference.on("value", changeColor)
}





function saveChanges(e) {
	console.log('saveChanges');

	var theme = {
		color: 'red'
	}

	console.log(theme);

	// save data to firebase

	firebaseReference.set(theme);

}

function changeColor(snapshot) {
	console.log('changeColor');

	var theme = snapshot.val();
	console.log(theme);
}