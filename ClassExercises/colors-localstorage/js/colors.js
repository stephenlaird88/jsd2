// Elements
// ----------------
var body = document.querySelector('body');
var ul = document.querySelector('ul');


// Events
// ----------------
window.addEventListener('load', restoreColor);
ul.addEventListener('click', clickColor);


// TODO: on window load, get color from local storage
function restoreColor(e) {

	// get color from local storage

	var colorScheme = localStorage.getItem('color');

	// validation cehck if color is null on first page load
	if (colorScheme == null) {
		return;
	}

	// convert to an object
	colorScheme = JSON.parse(colorScheme);

	// call change()
	change(colorScheme.color);

}

function clickColor(e) {
	// console.log('clickColor',e.target);


	// Event Delegation
	// "Return Early" if an li element was not clicked
	if (e.target.tagName != "LI") {
		return;
	}

	console.log(e.target.dataset.color);
	change(e.target.dataset.color);

	var colorScheme = {
		color: e.target.dataset.color,
		text: e.target.dataset.color
	} 

	// convert to string
	colorScheme = JSON.stringify(colorScheme);

	// save color to local storage
	localStorage.setItem('color', colorScheme);

}

function change(color) {
	console.log('change',color);
	body.className = color;
}

