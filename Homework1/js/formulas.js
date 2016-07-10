
// Instructions for your homework
// //////////////////////////////////////////////////////////////////
// 1.   Here is where your functions should be defined
// 2.	 What should you name your functions?  Hint:  check the console to see which functions are already being called.  Are they all "defined?"  If not yet defined... then define them here!
// 3.	 Be sure to link up this file in your HTML doc
/////////////////////////////////////////////////////////////////////


// Formula 1 = Fahrenheit to Celcius conversion: Takes an input of Fahrenheit Temperature (fTemp) and converts to Celcius temperature (cTemp). 

function calcFahrenheitToCelcius (fTemp) {
	
	var cTemp = (fTemp - 32) * (5/9);
	return cTemp;
}

// Formula 1.1 = Celcius to Fahrenheit conversion: Takes an input of Celcius Temperature (cTemp) and converts to Fahrenheit (fTemp).

function calcCelciusToFahrenheit (cTemp) {

	var fTemp = cTemp * (9/5) + 32;
	return fTemp;
}

// Formula 2 = Radius to Circumference conversion: Takes an input of radius and calculates the circumference.

function calcCircumference (radius) {

	var circumference = 2 * (Math.PI) * radius;
	return circumference;
}

// Formula 3 = Pythagorean Theorem: Takes inputs of 2 sides (A, B) and calculates the hypotenuse.

function calcLongestSide (a, b) {

	var hypotenuse = Math.sqrt((a * a) + (b * b));
	return hypotenuse;
}