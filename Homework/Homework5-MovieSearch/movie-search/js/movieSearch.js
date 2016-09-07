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
    if(movieTitle.value == ""){
        return;
    } else if(movieTitle.value != ""){
    // This grabs the value of the input form field
        var searchInput = movieTitle.value;
    // This is the specific end point url query for our api call
        var url = "https://omdbapi.com/?s=" + searchInput;
    // This is the jquery ajax request to openTable to grab json data based on our query
        $.getJSON(url, updateMovie);
    }
 }

 function getMovieDetails(e) {
 // Utilizing event delegation to check for any event that bubbles up within the ul results
 	if(e.target.nodeName != "LI"){
 		e.preventDefault();
    //  console.log(e.target);
 		var movieListId = e.target.parentElement.id;
 	//	console.log(listId);
 		var url = "https://omdbapi.com/?i=" + movieListId;
 		$.getJSON(url, updateMovieDetails);
 	} else if(e.target.nodeName == "LI"){
    //  console.log(e.target.nodeName);
 		console.log("Ohh no you didn't!");
 	}
 }

// You could use element.closest instead but it's not supported on all browsers 

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
    if(i.Poster == "N/A"){
        img.src = "http://static.fogs.com/static/uploads/images/605_undefined/4ff591e1-a10b978fcf.jpg";
    } else if(i.Poster != "N/A"){
        img.src = i.Poster;
    }
	li.id = i.imdbID;
    p.textContent = i.Title;
// Step 3: append to parents
    results.appendChild(li);
    li.appendChild(img);
    li.appendChild(p);
}

function updateMovieDetails(json) {
// add content / attributes from api to existing details html
    if(json.Poster == "N/A"){
        movieDetailsImage.src = "http://static.fogs.com/static/uploads/images/605_undefined/4ff591e1-a10b978fcf.jpg";
    } else if(json.Poster != "N/A"){
        movieDetailsImage.src = json.Poster;
    }
	movieDetailsTitle.textContent = json.Title;
	movieDetailsPlot.textContent = json.Plot;
	movieDetailsImdbLink.textContent = "View on IMDB";
	movieDetailsImdbLink.href = "https://www.imdb.com/title/" + json.imdbID;   
}

