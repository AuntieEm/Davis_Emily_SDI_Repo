/*
Emily Davis
March 24, 2015
Functions Worksheet
 */

/*
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

*/

//Circumference
console.log("Calculate the circumference of a circle.");    //print to console

var pi = 3.14; // value of pi
var radius = prompt("Please enter the radius of the circle.");  //prompt user for a number
radius = Number(radius);    //cast radius as a number
var circumference = calculateCirc(pi, radius);  //set parameters
console.log("The circumference of the circle is " + circumference + ".");   //print to console

function calculateCirc(p, r) { //arguments
    return 2 * p * r; //calculation
}

console.log(" ");   // print blank line to console.

//Stung
console.log("It takes 8.6666666667 bee stings per pound to kill an animal. Calculate how many bee stings are need to kill and animal in a function."); //print to console

var victimWeight = prompt("Enter a weight in pounds."); //prompt user for a number.
victimWeight = Number(victimWeight);    //cast victimWeight to a nubmer
var beeStings = 8.666667    // value of bee stings
var death = calculateDeathByBees(victimWeight, beeStings);  //set parameters
console.log("It takes " + death + " bee stings to kill this animal.");  //print result to console

function calculateDeathByBees(v, b) {   //arguments
    return Math.round(victimWeight * beeStings);    //calculation
}