/*
Emily Davis
Scalable Data Infrastructures
Expressions Assignments
 */

//variables

var zoneUp = 10 / 100;  //10% up charge
var dogCost = 15;   //per dog per day
var catCost = 10;   //per cat per day

//prompted variables

var zoneNum = prompt ("According to the Zones page on my website \nwhich zone do you live in?", 3); //user input for thier zone each zone has a different upcharge.
var dogNum = prompt ("How many dogs do you have?", 3); //user input for how many dogs they have.
var catNum = prompt ("How many cats do you have?", 1);  //user input for how many cats they have.
var nightsNum = prompt ("How many nights do you need me to stay?", 13); //user input for how many nights they need to reserve.

//calculated prompted variables

var subTotal = ((Number(dogNum) * Number(dogCost) * Number(nightsNum)) + (Number(catNum) * Number(catCost) * Number(nightsNum)));
//casts variables and calculates a subtotal for base cost
var perDay = Number(subTotal) / Number(nightsNum);
var discountUnits = Number(nightsNum) / 7; //casts variable. calculates how many days off for the book 7 get 1 free discount.
var discount = discountUnits * perDay; //calculates discount amount
var zoneCost = subTotal * zoneUp; //calculates zone cost up charge amount
var total = (subTotal + zoneCost) - (discount); //calculates the total cost


//Outputs

console.log("My client lives in Zone " + zoneNum + ".");
console.log("She has " + dogNum + " " + "dogs and " + catNum + " " + "cats.");
console.log ("She needs my services for " + nightsNum + " " + "nights.");
console.log("Her subtotal for this service is $" + subTotal + ".");
console.log("Because she lives in Zone " + zoneNum + " " + ", she will be charged 10% extra. Which is an extra $" + zoneCost + ".");


