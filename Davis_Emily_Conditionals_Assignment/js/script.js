/*
Emily Davis
March 19, 2015
Conditionals Assignment
 */

//variables



var city        = prompt("What city do you live in?","Grapevine");
var milesToAirport = prompt("How many miles is it to the nearest airport?",10);
var days        = prompt("How many days will you be needing my services?");
var petType     = prompt("What kind of pet(s) do you have?","Dogs or cats?");


//outputs

console.log(city + " is " + milesToAirport + " miles away from the nearest airport.");




//validation
if(days === "")  {
    days = prompt("You didn't specify how long you need my services for.")
    console.log("You'll be needing my services for " + days + " days.");
}