// Setup / Data
// ------------------------------------------
var startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
var startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];
var startupIdea;
var favorites = [];


// Structure
// ------------------------------------------
var startup  = document.querySelector('.startup');
var generate = document.querySelector('.generate');
var save     = document.querySelector('.save');
var print    = document.querySelector('.print');
var list     = document.querySelector('.list');


// Events
// ------------------------------------------
generate.addEventListener('click', generateStartup);
save.addEventListener('click', saveFavorite);
print.addEventListener('click', printFavorites);


// Event Listeners
// ------------------------------------------
function generateStartup() {

	// TODO: generate two random index numbers, one for each array
	var randomStartupX = startupX[getRandomInt(0,5)];
	var randomStartupY = startupY[getRandomInt(0,4)];

	// TODO: concatenate the fixed text with the two random values
	//       to create a new startup idea like:
	//       "A startup that is Apple, but for Trello"
	startupIdea = 'A startup that is ' + randomStartupX + ', but for ' + randomStartupY;


	// Update page with new startup idea
	startup.innerHTML = startupIdea;
}

function saveFavorite() {

	// TODO: add the new idea to the array
	favorites.push(startupIdea);

}

function printFavorites() {
	var favoritesText = " ";

	// clear out favorites element
	list.innerHTML = '';

	// TODO: concatenate all the favorites into one string
	// - hint: loop through all the favorites
	// - this should be stored in a variable named favoritesText
	// - each favorite should have an html br element between it (EG: "<br>")
	favorites.forEach(concatenateFavorites);

		function concatenateFavorites(itemInArray) {
			favoritesText = favoritesText + itemInArray + "<br>";
		}
	

	// update the list element with the new concatenated string
	list.innerHTML = favoritesText;
}


// Init
// ------------------------------------------
generateStartup();

// Helper functions
// ------------------------------------------
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

