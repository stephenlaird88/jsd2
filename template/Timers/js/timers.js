
function boom() {
	console.log("boom");
}

var bomb = setTimeout(boom, 5000);

// clear timer example

function defuseBomb() {
	clearTimeout(bomb);
}








// interval setup

var i = 0;

function count() {

	i++;
	console.log("Count:",i);
}

var counter = setInterval(count, 2000);


function stop() {
	window.clearTimeout(counter);
}