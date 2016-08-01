// Setup
// ----------------------------------------------



// Structure
// ----------------------------------------------
var stopButton = document.querySelector(".stop-button");
var slowButton = document.querySelector(".slow-button");
var goButton = document.querySelector(".go-button");
var cautionButton = document.querySelector(".caution-button");
var trafficLight = document.querySelector("#traffic-light");
var intervalId;


// Events
// ----------------------------------------------
stopButton.addEventListener("click", stop);
slowButton.addEventListener("click", slow);
goButton.addEventListener("click", go);
cautionButton.addEventListener("click", caution);


// Event handlers
// ----------------------------------------------
function stop(e) {
  trafficLight.classList.add("stop");
  trafficLight.classList.remove("slow");
  trafficLight.classList.remove("go");
  clearInterval(intervalId);
}

function slow(e) {
  trafficLight.classList.remove("stop");
  trafficLight.classList.add("slow");
  trafficLight.classList.remove("go");
  clearInterval(intervalId);
}

function go(e) {
  trafficLight.classList.remove("stop");
  trafficLight.classList.remove("slow");
  trafficLight.classList.add("go");
  clearInterval(intervalId);
}

function caution(e) {

  slow(e);

  intervalId = setInterval(function() {
    trafficLight.classList.toggle("slow");
    trafficLight.classList.remove("go");
    trafficLight.classList.remove("stop");
  }, 1000);
}


// Update page functions
// ----------------------------------------------


// var light = {
//   "state": null,
//   "time": 2
// }

// /*add it*/
// function changeStop () {
//   stop.classList.add("current");
//   slow.classList.remove("current");
//   go.classList.remove("current");
//   // save state to localStorage
//   light.state = "stop";
//   localStorage.setItem("light", JSON.stringify(light));
// }

// function changeSlow () {
//   slow.classList.add("current");
//   stop.classList.remove("current");
//   go.classList.remove("current");
//   // save state to localStorage
//   light.state = "slow";
//   localStorage.setItem("light", JSON.stringify(light));
// }

// function changeGo () {
//   go.classList.add("current");
//   stop.classList.remove("current");
//   slow.classList.remove("current");
//   // save state to localStorage
//   light.state = "go";
//   localStorage.setItem("light", JSON.stringify(light));
// }

// stopButton.addEventListener("click", changeStop);
// slowButton.addEventListener("click", changeSlow);
// goButton.addEventListener("click", changeGo);


// var lastLight = JSON.parse(localStorage.getItem("light"));

// if (lastLight.state == "slow") {
//   changeSlow();
// } else if (lastLight.state == "stop") {
//   changeStop();
// } else if (lastLight.state == "go") {
//   changeGo();
// }

