// Structure
// ------------------------------------
var results = document.querySelector(".results");
var form = document.querySelector("form");
var zip = document.querySelector("form .zip");


// Events// ----------------------------------------------

form.addEventListener('submit', getRestaurants);


// Event Handler 
// ------------------------------------

function getRestaurants(e) {
    e.preventDefault();
// This grabs the value of the input form field
    var search = zip.value;
    console.log(search);
// This is the specific end point url query for our api call
    var url = "http://opentable.herokuapp.com/api/restaurants?zip=" + search;
// This is the jquery ajax request to openTable to grab json data based on our query
    $.getJSON(url, updateRestaurant);

}

function updateRestaurant(json) {
    console.log('updateRestaurant',json);
    // This clears the previous results of the ul element. 
    results.innerHTML = '';
    // This creates new search results. It reads, for each restaurant array of objects, execute the createRestaurant function. 
    json.restaurants.forEach(createRestaurant)
}

function createRestaurant (i){

// Step 1: create elements
    var li = document.createElement("li");
    var img = document.createElement("img");
    var h2 = document.createElement("h2");
    var p = document.createElement("p");
// Step 2: add content / attributes
/* The i in this case is similar to e. It's just a local placeholder that represents each item in the array. In this case each
   item in the array is the restaurants object from the json data. */
    img.src = i.image_url;
    h2.textContent = i.name;
    p.textContent = i.address;
// notes: hardcoded first   
    //img.src = "https://upload.wikimedia.org/wikipedia/commons/3/39/Phat_Thai_kung_Chang_Khien_street_stall.jpg";
    //h2.textContent = "Thai Express 17";
    //p.textContent = "3654 24th St., SF, cA, 94109";
// Step 3: append to parents
    results.appendChild(li);
    li.appendChild(img);
    li.appendChild(h2);
    li.appendChild(p);
}

/*
 var italian = {
        name: "italian food",
        address: "2345 13th St., SF, CA, 94109",
        image: "https://upload.wikimedia.org/wikipedia/commons/3/39/Phat_Thai_kung_Chang_Khien_street_stall.jpg"
    };

 var pizza = {
        name: "extra cheesy pizza",
        address: "2345 Montgomery., SF, CA, 94209",
        image: "https://upload.wikimedia.org/wikipedia/commons/3/39/Phat_Thai_kung_Chang_Khien_street_stall.jpg"
    };

 var burmese = {
        name: "tealeaf sald",
        address: "1234 Montgomery., SF, CA, 94209",
        image: "http://www.raiseatoast.ca/wp-content/uploads/2014/05/burmese-tea-leaf-salad-2.jpg"
    };
*/
// var restaurants = [];
//restaurants.push(italian, pizza, burmese);

