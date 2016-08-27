// Elements
// ----------------
var body = document.querySelector('body');
var ul = document.querySelector('ul');


// Events
// ----------------
ul.addEventListener('click', clickColor);
window.addEventListener('load', restoreColor);


function restoreColor(e) {

	// get the saved theme from localStorage
	var theme = localStorage.getItem("theme");

	// error check: what if nothing is in localStorage
	if (theme == null) {
		return;
	}

	// convert string to json object
	theme = JSON.parse(theme);

	// call change color and pass background
	changeColor(theme.color);
}

function clickColor(e) {
	console.log('clickColor', e.target);

	// Event Delegation
	// "Return Early" if an li element was not clicked
	if (e.target.tagName != "LI") {
		return;
	}

	changeColor(e.target.dataset.color);

	// create theme object to save
	var theme = {
 		color: e.target.dataset.color
 	};

 	// convert object to string and
	// save color to local storage, in one step
	localStorage.setItem("theme", JSON.stringify(theme));
}


var changeColor = function(color) {
	console.log('change', color);
	body.className = color;
}

