// Elements
// --------------------------

var mapEl = document.querySelector('.map');


// Setup
// --------------------------
var map;

// Map Options
// --------------------
var options = {
	center: {lat: 37.790841, lng: -122.40128},
	zoom: 15
};



function initMap() {

	// setup new google map object
	map = new google.maps.Map(mapEl, options)

	// setup new places api search
	var service = new google.maps.places.PlacesService(map);
	service.nearbySearch({
		location: {lat: 37.790841, lng: -122.40128},
		radius: 10,
		type: ['store']
	}, displayResults);

	// callback function with search result data
	// call createMarket 1 time for each place
	function displayResults(results, status) {
		console.log("displayResults");
		results.forEach(createMarker);
	}

	// create one market for each place
	function createMarker(place) {
		var marker = new google.maps.Marker({
			map: map,
			title: "GA",
			position: place.geometry.location
		});
	}

	navigator.geolocation.getCurrentPosition(updateLocation);

}



function updateLocation(position) {
	console.log("updateLocation");
	console.log(pozzy);
	var lat = position.coords.latitude;
	var lng = position.coords.longitude;

	var marker = new google.maps.Marker({
		map: map,
		postion: {
			lat: lat,
			lng: lng
		}
	})
}