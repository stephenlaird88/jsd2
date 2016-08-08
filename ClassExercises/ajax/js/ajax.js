
// Structure
// ----------------------------------------------

var p = document.querySelector("body p");
var ul = document.querySelector("ul");

// create path to ajax request
var url = "https://api.consumerfinance.gov/data/hmda.json";

// setup ajax request
var jqxhr = $.getJSON(url, handleData);

// callback function for ajax request
// ajax callbacks expect the JSON data
function handleData(json) {
	console.log(json);

	var description = json['description'];

	// debugger
	p.textContent = description;

	// technique 1 - unpack json and save to variable
	// var concepts = json._embedded.concepts
	// concepts.forEach(createConcept);

	// technique 2 - just go right to array in json using bracket notation
	json._embedded.concepts.forEach(createConcept);

	function createConcept(i) {
		//console.log('createConcept', i);

		//console.log(i.description);
		var li = document.createElement("li");
		li.innerHTML = i.description;
		ul.appendChild(li);
	}
}