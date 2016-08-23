// Structure
// ----------------------------------------------

var searchIcon = document.querySelector("section #search");
var articleTemplate = document.querySelector("#article-template");
var articleList = document.querySelector("#main");




// Setup
//-------------------------------------------------------



// Events
// ----------------------------------------------


searchIcon.addEventListener('click', getNews);







// Event handlers
// ----------------------------------------------


function getNews(e) {
	e.preventDefault();
	var url = "https://newsapi.org/v1/articles?source=techcrunch&sortBy=top&apiKey=71dcc53c8c8c489bbb86f34f4bc5e313";
	$.getJSON(url, updateNews);
}






// Update page
// ----------------------------------------------


function updateNews(json) {
	console.log('updateNews', json);
	json.articles.forEach(createNews);
}

function createNews(i) {
	// Handlebars
	var template = Handlebars.compile(articleTemplate.innerHTML);
	articleList.insertAdjacentHTML('beforeend', template(i));
}