// Elements

//----------

var body = document.querySelector('body');
var ul = document.querySelector('ul');





// Events
// -----------------

ul.addEventListener('click', clickColor);

function clickColor(e) {
	// console.log('clickColor', e.target);

	// Event Delegation
	// Return early if an li element was not clicked
	if (e.target.tagName != "LI") {
		return;
	}

	console.log(e.target.dataset.color);
	change(e.target.dataset.color);
}



function change(color) {
	console.log('change',color);
	body.className = color;
}