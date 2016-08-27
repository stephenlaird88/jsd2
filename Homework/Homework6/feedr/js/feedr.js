// Structure
// ----------------------------------------------

var searchIcon = document.querySelector("section #search");
var articleTemplate = document.querySelector("#article-template");
var articleList = document.querySelector("#main");
var popUp = document.querySelector("#popUp");
var articlePopOutDetails = document.querySelector("#popUp .container");
var articlePopOutTemplate = document.querySelector("#article-details-template");
var closePopUp = document.querySelector("a.closePopUp");
var source1 = document.querySelector(".container #source-1");
var source2 = document.querySelector(".container #source-2");
var source3 = document.querySelector(".container #source-3");
var searchInput = document.querySelector("#search input");
var FeedrLogo = document.querySelector(".container h1");



// Setup
//-------------------------------------------------------

var articleData = [];
var articleData1stApiCall;




// Events
// ----------------------------------------------

window.addEventListener("load", getAllSources);
source1.addEventListener('click', getOneSource);
source2.addEventListener('click', getOneSource);
source3.addEventListener('click', getOneSource);
articleList.addEventListener('click', getSourceDetail);
closePopUp.addEventListener('click', closeOverlay);
searchInput.addEventListener('keydown', filterSearchResults);
FeedrLogo.addEventListener('click', getAllSources);






// Event handlers
// ----------------------------------------------
function getAllSources(e) {
	e.preventDefault();
	popUp.classList = "loader";
	// This clears the previous articles
	articleList.innerHTML = '';
	// Grab source1 and update array of articles
    var url1 = "https://newsapi.org/v1/articles?source=techcrunch&sortBy=top&apiKey=71dcc53c8c8c489bbb86f34f4bc5e313";
    $.getJSON(url1, updateOneSource);
    popUp.classList = "loader";
    // Grab source2 and update array of articles
    var url2 = "https://newsapi.org/v1/articles?source=hacker-news&sortBy=top&apiKey=71dcc53c8c8c489bbb86f34f4bc5e313";
    $.getJSON(url2, updateAllSource);
    // Grab source3 and update array of articles
    var url3 = "https://newsapi.org/v1/articles?source=the-verge&sortBy=top&apiKey=71dcc53c8c8c489bbb86f34f4bc5e313";
    $.getJSON(url3, updateAllSource);
	// Hiding loader display
	closeOverlay();
}

function getOneSource(e) {
	e.preventDefault();
	popUp.classList = "loader";
	var action = event.target.closest("li").id;
	switch (action) {
		case 'source-1':
			var url = "https://newsapi.org/v1/articles?source=techcrunch&sortBy=top&apiKey=71dcc53c8c8c489bbb86f34f4bc5e313";
			break;
		case 'source-2':
			var url = "https://newsapi.org/v1/articles?source=hacker-news&sortBy=top&apiKey=71dcc53c8c8c489bbb86f34f4bc5e313";
			break;
		case 'source-3':
			var url = "https://newsapi.org/v1/articles?source=the-verge&sortBy=top&apiKey=71dcc53c8c8c489bbb86f34f4bc5e313";
			break;
	}
	$.getJSON(url, updateOneSource);
}


function getSourceDetail(e) {

	// change class name to overlay article detail modal 
	popUp.classList = "";

	// Utilizing event.target.closest to grab the index from our data attribute
	var articleIndex = parseInt(event.target.closest(".article").dataset.index);
	// Handlebars to dynamically create new html
	var template = Handlebars.compile(articlePopOutTemplate.innerHTML);
	var html = template(articleData[articleIndex]);
	articlePopOutDetails.innerHTML = html;
}


function closeOverlay(e) {
	popUp.classList = "loader hidden";
}

// When a keystroke is logged in the search input, this function fires 
function filterSearchResults(e) {
	// check if backspace was clicked to restore the original page article results; otherwise filter
	if (e.key === "Backspace") {
		articleData = articleData1stApiCall;
		updateSourceFiltered(articleData1stApiCall);
	} else {
		// this function iterates through the description text of each array of objects in our articleData
		// and returns items in the array that match our search. In this case article objects are returned.
		articleData.forEach(containsSearch);
		// use jQuery.grep to strip articleData of articles that do not match the search 
		articleData = $.grep(articleData, function(articleData, i) {
			return articleData.searchMatch === true;
		});
		updateSourceFiltered(articleData);
	}
}
// Update page
// ----------------------------------------------

function updateAllSource(json) {
	console.log('updateAllSource', json);
//	json.articles.forEach(collateMultipleSourcesJSON);
//   articleData.push(json.articles);
 	var lengthOfArray = json.articles.length;
	var counter = 0;
	while (counter < lengthOfArray) {
		articleData.push(json.articles[lengthOfArray]);
		lengthOfArray = lengthOfArray - 1;
	}
	// Remove all undefined from the array to have clean data
	articleData = articleData.filter(Boolean);
	articleData.sort(sortByDate);
	articleData1stApiCall = articleData;
    //articleData.forEach(sanitizeData);
    // Creates new article results
	var template = Handlebars.compile(articleTemplate.innerHTML);
	//articleList.insertAdjacentHTML('beforeend', template(json.articles));
	articleList.innerHTML = template(articleData);
}

function updateOneSource(json) {
	console.log('updateOneSource', json);
	// This clears the previous articles
	articleList.innerHTML = '';
	// Creates new article results
	var template = Handlebars.compile(articleTemplate.innerHTML);
	articleList.innerHTML = template(json.articles);
	// Hiding loader display
	closeOverlay();
	// saving json.articles objet to global scope to be used later
	articleData = json.articles; 
	articleData = articleData.filter(Boolean);
}

function updateSourceFiltered() {
	// This clears the previous articles
	articleList.innerHTML = '';
	// Creates new article results
	var template = Handlebars.compile(articleTemplate.innerHTML);
	articleList.innerHTML = template(articleData);
}


// Helper functions
// ---------------------------------------------------
/*
function collateMultipleSourcesJSON (i) {
	var lengthOfArray = json.articles.length;
	var counter = 0;
	while (counter < lengthOfArray) {
		articleData.push(json.articles[lengthOfArray]);
		lengthOfArray = lengthOfArray - 1;
	}
}
*/
/*
function sanitizeData (i) {
	// use jQuery.grep to strip articleData of any undefined bad data
	i = $.grep(i, function(n, i) {
		return i != undefined;
	});
}
*/
function containsSearch (i) {
// for each article object in the array, add a property called searchMatch which indicates whether 
// the search input the user typed is in the title of the article
	i.searchMatch = i.title.includes(searchInput.value);
}

function sortByDate (a, b) {
  // Turn your strings into dates, and then subtract them
  // to get a value that is either negative, positive, or zero.
  return new Date(b.publishedAt) - new Date(a.publishedAt);
}


