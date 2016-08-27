// Structure
// ----------------------------------------------

var articleTemplate = document.querySelector("#article-template");
var articleList = document.querySelector("#main");
var popUp = document.querySelector("#popUp");
var articlePopOutDetails = document.querySelector("#popUp .container");
var articlePopOutTemplate = document.querySelector("#article-details-template");
var closePopUp = document.querySelector("a.closePopUp");
var sourceTitles = document.querySelector(".container nav ul li ul");
var searchInput = document.querySelector("#search input");
var FeedrLogo = document.querySelector(".container h1");



// Setup
//-------------------------------------------------------

var articleData = [];
// we have a copy of articleData so that we can use this for reloading the page with the original articles
// if the user decides to clear their search filter
var articleData1stApiCall;



// Events
// ----------------------------------------------

window.addEventListener("load", getAllSources);
sourceTitles.addEventListener('click', getOneSource);
articleList.addEventListener('click', getSourceDetail);
closePopUp.addEventListener('click', closeOverlay);
searchInput.addEventListener('keydown', filterSearchResults);
FeedrLogo.addEventListener('click', getAllSources);




// Event handlers
// ----------------------------------------------
function getAllSources(e) {
	e.preventDefault();
	// adds the loader overlay while api calls are firing
	popUp.classList = "loader";
	// this clears the previous articles
	articleList.innerHTML = '';
	// grab source1 and update array of articles. we use updateOneSource for the first one because we have some 
	// json sanitization functionality in the subsequent api calls that are not necessary for the first json
    var url1 = "https://newsapi.org/v1/articles?source=techcrunch&sortBy=top&apiKey=71dcc53c8c8c489bbb86f34f4bc5e313";
    $.getJSON(url1, updateOneSource);
    // updateOneSource is used in another use-case and closes the loader so we add it back for the other api calls
    popUp.classList = "loader";
    // grab source2 and update array of articles
    var url2 = "https://newsapi.org/v1/articles?source=hacker-news&sortBy=top&apiKey=71dcc53c8c8c489bbb86f34f4bc5e313";
    $.getJSON(url2, updateAllSource);
    // grab source3 and update array of articles
    var url3 = "https://newsapi.org/v1/articles?source=the-verge&sortBy=top&apiKey=71dcc53c8c8c489bbb86f34f4bc5e313";
    $.getJSON(url3, updateAllSource);
    // grab source4 and update array of articles
    var url4 = "https://newsapi.org/v1/articles?source=ars-technica&sortBy=latest&apiKey=71dcc53c8c8c489bbb86f34f4bc5e313";
    $.getJSON(url4, updateAllSource);
    // grab source5 and update array of articles
    var url5 = "https://newsapi.org/v1/articles?source=the-next-web&sortBy=popular&apiKey=71dcc53c8c8c489bbb86f34f4bc5e313";
    $.getJSON(url5, updateAllSource);
    // grab source6 and update array of articles
    var url6 = "https://newsapi.org/v1/articles?source=engadget&sortBy=top&apiKey=71dcc53c8c8c489bbb86f34f4bc5e313";
    $.getJSON(url6, updateAllSource);
    // grab source7 and update array of articles
    var url7 = "https://newsapi.org/v1/articles?source=polygon&sortBy=top&apiKey=71dcc53c8c8c489bbb86f34f4bc5e313";
    $.getJSON(url7, updateAllSource);
    // grab source8 and update array of articles
    var url8 = "https://newsapi.org/v1/articles?source=recode&sortBy=top&apiKey=71dcc53c8c8c489bbb86f34f4bc5e313";
    $.getJSON(url8, updateAllSource);    

}

function getOneSource(e) {
	e.preventDefault();
	// adds the loader overlay while api call is firing
	popUp.classList = "loader";
	// utilize event delegation to find the specific li.id in order to request the api call based on the user's selection
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
		case 'source-4':
			var url = "https://newsapi.org/v1/articles?source=ars-technica&sortBy=latest&apiKey=71dcc53c8c8c489bbb86f34f4bc5e313";
			break;
		case 'source-5':
			var url = "https://newsapi.org/v1/articles?source=the-next-web&sortBy=popular&apiKey=71dcc53c8c8c489bbb86f34f4bc5e313";
			break;
		case 'source-6':
			var url = "https://newsapi.org/v1/articles?source=engadget&sortBy=top&apiKey=71dcc53c8c8c489bbb86f34f4bc5e313";
			break;	
		case 'source-7':
			var url = "https://newsapi.org/v1/articles?source=polygon&sortBy=top&apiKey=71dcc53c8c8c489bbb86f34f4bc5e313";
			break;
		case 'source-8':
			var url = "https://newsapi.org/v1/articles?source=recode&sortBy=top&apiKey=71dcc53c8c8c489bbb86f34f4bc5e313";
			break;											
	}
	$.getJSON(url, updateOneSource);
}

function getSourceDetail(e) {
	// change class name to overlay article detail modal 
	popUp.classList = "";
	// utilizing event.target.closest to grab the index from our data attribute
	var articleIndex = parseInt(event.target.closest(".article").dataset.index);
	// handlebars to dynamically create new html
	var template = Handlebars.compile(articlePopOutTemplate.innerHTML);
	// using articleIndex to indicate which exact article object in the array to fetch details from
	var html = template(articleData[articleIndex]);
	articlePopOutDetails.innerHTML = html;
}

function closeOverlay(e) {
	// change class name to close the loader overlay
	popUp.classList = "loader hidden";
}

// when a keystroke is logged in the search input, this function fires 
function filterSearchResults(e) {
	// check if backspace was clicked to restore the original page article results; otherwise filter
	if (e.key === "Backspace") {
		articleData = articleData1stApiCall;
		updateSourceFiltered(articleData1stApiCall);
	} else {
		// this function iterates through the title text of each array of objects in our articleData
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
	// since the first api call creates a json.articles, we do not want multiple array of objects in our 
	// array. Instead we want one json.articles with all the individual article objects from each api
	// pushed into our existing articleData to form one giant array of article objects. This way our existing
	// handlebars template will work nicely; otherwise you'd have to manipulate the html creation when it's 
	// easier to manipulate your json to fit the template. The following code loops through each article object
	// from an api's array of article objects and pushes each article object into our existing array of articles.
 	var lengthOfArray = json.articles.length;
	var counter = 0;
	while (counter < lengthOfArray) {
		articleData.push(json.articles[lengthOfArray]);
		lengthOfArray = lengthOfArray - 1;
	}
	// remove all undefined from the array to have clean data. those extraneous properties that are not part of the 
	// array of articles come into our giant array as undefined from our loop above - so we clean it =)
	articleData = articleData.filter(Boolean);
	// sort articleData chronologically
	articleData.sort(sortByDate);
	// save our articleData1stApiCall so we can reload the page if the user deletes search filter
	articleData1stApiCall = articleData;
    // creates new dynamic html article results
	var template = Handlebars.compile(articleTemplate.innerHTML);
	articleList.innerHTML = template(articleData);
	// hiding loader display
	closeOverlay();
}

function updateOneSource(json) {
	console.log('updateOneSource', json);
	// this clears the previous articles
	articleList.innerHTML = '';
	// creates new article results
	var template = Handlebars.compile(articleTemplate.innerHTML);
	articleList.innerHTML = template(json.articles);
	// hiding loader display
	closeOverlay();
	// saving json.articles objet to global scope to be used later
	articleData = json.articles; 
	articleData = articleData.filter(Boolean);
}

function updateSourceFiltered() {
	// this clears the previous articles
	articleList.innerHTML = '';
	// creates new article results
	var template = Handlebars.compile(articleTemplate.innerHTML);
	articleList.innerHTML = template(articleData);
}




// Helper functions
// ---------------------------------------------------

function containsSearch (i) {
    // for each article object in the array, add a property called searchMatch which indicates whether 
    // the search input the user typed is in the title of the article
	i.searchMatch = i.title.includes(searchInput.value);
}

function sortByDate (a, b) {
    // turn your strings into dates, and then subtract them
    // to get a value that is either negative, positive, or zero.
	return new Date(b.publishedAt) - new Date(a.publishedAt);
}


