// Structure

var score = 0;
var scoreboard = document.querySelector("#score");
var addFive = document.querySelector("#increase-5");
var subFive = document.querySelector("#decrease-5");
var customScore = document.querySelector("#custom-score");
var setScore = document.querySelector("#submit-custom-score");


// Events

addFive.addEventListener('click', increaseByFive);
subFive.addEventListener('click', decreaseByFive);
setScore.addEventListener('click', setCustom);




// Call-back Functions


function increaseByFive(e) {
	e.preventDefault();
	console.log('increaseByFive');
	score = score + 5;
	if (score < 0) {
		scoreboard.innerHTML = "- Dummy!"; 
	} else if (score >= 0) {
		scoreboard.innerHTML = score + " " + "Points"; 
	}

}


function decreaseByFive(e) {
	e.preventDefault();
	console.log('decreaseByFive');
	score = score - 5;
	if (score < 0) {
		scoreboard.innerHTML = "- Dummy!"; 
	} else if (score >= 0) {
		scoreboard.innerHTML = score + " " + "Points"; 
	}	
}

function setCustom(e) {
	e.preventDefault();
	console.log('setCustom');
	score = customScore.value;
	scoreboard.innerHTML = score + " " + "Points";

}