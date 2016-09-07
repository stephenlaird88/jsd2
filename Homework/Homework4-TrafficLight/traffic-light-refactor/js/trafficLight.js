
// Structure
// ----------------------------------------------
var stopButton = document.querySelector(".stop-button");
var slowButton = document.querySelector(".slow-button");
var goButton = document.querySelector(".go-button");
var cautionButton = document.querySelector(".caution-button");
var runButton = document.querySelector(".run-button");
var trafficLight = document.querySelector("#traffic-light");
var intervalId;


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
// Clears the interval Id that was set by caution(e) so that the user doesn't see flashing yellow at the same time as red
  clearInterval(intervalId);
  trafficLight.classList.add("stop");
  trafficLight.classList.remove("slow");
  trafficLight.classList.remove("go");
}

function slow(e) {
// Clears the interval Id that was set by caution(e) so that the user doesn't see flashing yellow at the same time as yellow
  clearInterval(intervalId);
  trafficLight.classList.remove("stop");
  trafficLight.classList.add("slow");
  trafficLight.classList.remove("go");
}

function go(e) {
// Clears the interval Id that was set by caution(e) so that the user doesn't see flashing yellow at the same time as green
  clearInterval(intervalId);
  trafficLight.classList.remove("stop");
  trafficLight.classList.remove("slow");
  trafficLight.classList.add("go");
}

function caution(e) {
  slow(e);
  intervalId = setInterval(function() {
    trafficLight.classList.toggle("slow");
    trafficLight.classList.remove("go");
    trafficLight.classList.remove("stop");
  }, 1000);
}

/* First set the light to Red and clear everything else. We also want to store a data attribute on run-button that is set when the run
function is triggered. 

Then we can have a setInterval function that has a series of If statement checks. These checks will check the data-attribute and if it's
let's say run-stop, then it will trigger the lines of code to update the color to red as well as then update the data attribute to let's
say run-slow. After 1 second the setInterval function is triggered again and executes the series of checks again. This time, the data
attribute is run-slow which executes the lines of code to change to yellow. Rinse and repeat. 
*/

function run(e) {
// Execute stop(e) first so that the user see's the light turn to red instantly rather than a 1 second lag
  stop(e);
  e.target.dataset.run = "slow"; 
  intervalId = setInterval(function() {
    if(e.target.dataset.run == "slow"){
      trafficLight.classList.add("slow");
      trafficLight.classList.remove("stop");
      trafficLight.classList.remove("go");
      e.target.dataset.run = "go";
   } else if(e.target.dataset.run == "go"){
      trafficLight.classList.add("go");
      trafficLight.classList.remove("stop");
      trafficLight.classList.remove("slow");
      e.target.dataset.run = "stop";
   } else if(e.target.dataset.run == "stop"){
      trafficLight.classList.add("stop"); 
      trafficLight.classList.remove("go");
      trafficLight.classList.remove("slow");
      e.target.dataset.run = "slow";
   }
  }, 1000);
}

// ----------------------------------------------



