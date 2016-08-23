
// 1. constructor: function that creates a prototype object
// 2. prototype
// 3. new
// 4. this

var Fighter = function(name) {
	this.name = name;
	this.punch = function() {
		alert(this.name + " punches");
	}
 }
