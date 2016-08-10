var food; 

switch (food) {
	case 'donuts':
		console.log("I like donuts");
		break;
	case 'Korean BBQ':
		console.log("I like Korean BBQ");
		break;
}


var grade = "B";

/*

if (grade === "A") {
	console.log("Cool");
} else if (grade === "B") {
	console.log("What the hell. Why didn't you get an A?")
} else if (grade === "C") {
	console.log("WTF????!!!!");
} else {
	console.log("Unexpected grade. SYSTEM ERROR!");
}
*/



switch (grade) {
	case 'A':
	case 'B':
		console.log("Cool");
		break;
	case 'C':
		console.log("WTF????!!!!");
		break;
	default:
		console.log("Unexpected grade. SYSTEM ERROR!");
}