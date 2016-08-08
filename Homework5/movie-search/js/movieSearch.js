// Setup
// ----------------------------------------------


// Structure
// ----------------------------------------------
var results = document.querySelector(".results");
var form = document.querySelector("form");
var movieTitle = document.querySelector("form .search");
var movieDetailsImage = document.querySelector(".details .image .poster");
var movieDetailsTitle = document.querySelector(".details .text .title");
var movieDetailsPlot = document.querySelector(".details .plot");
var movieDetailsImdbLink = document.querySelector(".details .imdb-link");

// Events
// ----------------------------------------------
form.addEventListener('submit', getMovies);

// This is the 2nd event listener for when the user clicks into one of the search results
results.addEventListener('click', getMovieDetails);

// Event handlers
// ----------------------------------------------

function getMovies(e) {
    e.preventDefault();
// This grabs the value of the input form field
    var search = movieTitle.value;
    console.log(search);
// This is the specific end point url query for our api call
    var url = "http://omdbapi.com/?s=" + search;
// This is the jquery ajax request to openTable to grab json data based on our query
    $.getJSON(url, updateMovie);
 }

 function getMovieDetails(e) {
 // Utilizing event delegation to check for any event that bubbles up within the ul results
 	if(e.target && e.target.nodeName == "P"){
 		e.preventDefault();
 		var listId = e.target.parentElement.id;
 		console.log(listId);
 		var url = "http://omdbapi.com/?i=" + listId;
 		$.getJSON(url, updateMovieDetails);
 	} else if(e.target && e.target.nodeName !== "P"){
 		console.log("Too bad sucker there's a bug!");
 	}
 }

// Update page
// ----------------------------------------------

function updateMovie(json) {
    console.log('updateMovie',json);
    // This clears the previous results of the ul element. 
    results.innerHTML = '';
    // This creates new search results. It reads, for each restaurant array of objects, execute the createRestaurant function. 
    json.Search.forEach(createMovie)
}

function createMovie (i){
// Step 1: create elements
    var li = document.createElement("li");
    var img = document.createElement("img");
    var p = document.createElement("p");
// Step 2: add content / attributes
	li.id = i.imdbID;
    img.src = i.Poster;
    p.textContent = i.Title;
// Step 3: append to parents
    results.appendChild(li);
    li.appendChild(img);
    li.appendChild(p);
}

function updateMovieDetails(json) {
// add content / attributes from api to existing details html
	movieDetailsImage.src = json.Poster;
	movieDetailsTitle.textContent = json.Title;
	movieDetailsPlot.textContent = json.Plot;
	movieDetailsImdbLink.textContent = "View on IMDB";
	movieDetailsImdbLink.href = "http://www.imdb.com/title/" + json.imdbID;
}

