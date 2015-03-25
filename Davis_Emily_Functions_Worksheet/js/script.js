/*
Emily Davis
March 24, 2015
Functions Worksheet
 */


//Example
//caculate the area of a rectangle given the width and height of the rectangle.
console.log("Example:  Calculate the area of a rectangle given the width and height of the rectangle.");

var width = 5;
var height = 6;
var area = calculateArea(width, height);
console.log("The Area of the rectangle is " + area + ".");

function calculateArea(w, h) {
    return w * h;
}

console.log(" ");

//Circumference
console.log("Calculate the circumference of a circle.");

var pi = 3.14;
var radius = prompt("Please enter the radius of the circle.");
radius = Number(radius);
var circumference = calculateCirc(pi, radius);
console.log("The circumference of the circle is " + circumference + ".");

function calculateCirc(p, r) {
    return 2 * p * r;
}

console.log(" ");

//Stung
console.log("It takes 8.6666666667 bee stings per pound to kill an animal. Calculate how many bee stings are need to kill and animal in a function.");

var victimWeight = prompt("Enter a weight in pounds.");
victimWeight = Number(victimWeight);
var beeStings = 8.666667
var death = calculateDeathByBees(victimWeight, beeStings);
    

