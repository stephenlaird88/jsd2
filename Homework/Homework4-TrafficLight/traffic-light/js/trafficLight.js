// Setup
// ----------------------------------------------



// Structure
// ----------------------------------------------
var stopButton = document.querySelector(".stop-button");
var slowButton = document.querySelector(".slow-button");
var goButton = document.querySelector(".go-button");
var cautionButton = document.querySelector(".caution-button");
var runButton = document.querySelector(".run-button");
var trafficLight = document.querySelector("#traffic-light");
var intervalId;
var counter = 0;


// Events
// ----------------------------------------------
stopButton.addEventListener("click", stop);
slowButton.addEventListener("click", slow);
goButton.addEventListener("click", go);
cautionButton.addEventListener("click", caution);
runButton.addEventListener("click", run);


// Event handlers
// ----------------------------------------------
function stop(e) {
// Setting counter to 0 allows us to transition from the stop to the run button with no problems.
  counter = 0;
  trafficLight.classList.add("stop");
  trafficLight.classList.remove("slow");
  trafficLight.classList.remove("go");
  clearInterval(intervalId);
}

function slow(e) {
// Setting counter to 0 allows us to transition from the slow to the run button with no problems.
  counter = 0;
  trafficLight.classList.remove("stop");
  trafficLight.classList.add("slow");
  trafficLight.classList.remove("go");
  clearInterval(intervalId);
}

function go(e) {
// Setting counter to 0 allows us to transition from the go to the run button with no problems.
  counter = 0;
  trafficLight.classList.remove("stop");
  trafficLight.classList.remove("slow");
  trafficLight.classList.add("go");
  clearInterval(intervalId);
}

function caution(e) {
// Setting counter to 0 allows us to transition from the caution to the run button with no problems.
  slow(e);
  counter = 0;
  intervalId = setInterval(function() {
    trafficLight.classList.toggle("slow");
    trafficLight.classList.remove("go");
    trafficLight.classList.remove("stop");
  }, 1000);
}


function run(e) {
// First set the light to Red and clear everything else.
  trafficLight.classList.add("stop");
  trafficLight.classList.remove("go");
  trafficLight.classList.remove("slow");
  clearInterval(intervalId);

/* Then use the setInterval function to transition to yellow and update a counter which we set as 0 to start. Every 3 seconds,
   the counter will update by 1. */
  intervalId = setInterval(function() {
    trafficLight.classList.add("slow");
    trafficLight.classList.remove("go");
    trafficLight.classList.remove("stop");
    counter = counter + 1; 
    }, 3000);
  // Calling my checkCounter function ensures my setTimeout of 5.9 seconds moves us to green before the 2nd interval happens. 
  checkCounter();
}

// Helper functions ------------------------------

/* This function checks to see if the var counter equals 1. For our purposes, a counter of 1 means the run function ran through once.
   Meaning at this point, the light changed from red to yellow and we now want to make it turn green in another 3 seconds. If the counter
   equals 1, then our function clears the light and turns the light green. If the counter doesn't equal 1 then I have it call this same
   checkCounter function again in 5.9 seconds. I've timed it at 5.9 seconds because the setInterval function will be at a counter of
   2 in 6 seconds since I set the interval to 3 seconds. 

*/
function checkCounter(){
  if (counter === 1) {
    trafficLight.classList.remove("stop");
    trafficLight.classList.remove("slow");
    trafficLight.classList.add("go");
    clearInterval(intervalId);
    } else if (counter !== 1) {
      setTimeout(checkCounter, 5900);
    }
}

// ----------------------------------------------



