/*
Emily Davis
March 24, 2015
Functions Worksheet
 */


//Example
//caculate the area of a rectangle given the width and height of the rectangle.

var width = 5;
var height = 6;
var area = calculateArea(width, height);
console.log("The Area of the rectangle is " + area + ".");

function calculateArea(w, h) {
    return w * h;
}