/*
Emily Davis
March 11, 2015
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
var animals = ["dogs", "cats", "birds", "hedgehogs"]//the different types of animals that I know how to take care of.
//calculated prompted variables


var subTotal = ((Number(dogNum) * Number(dogCost) * Number(nightsNum)) + (Number(catNum) * Number(catCost) * Number(nightsNum)));
//casts variables and calculates a subtotal for base cost
var perDay = Number(subTotal) / Number(nightsNum);
var discountUnits = Number(nightsNum) / 7; //casts variable. calculates how many days off for the book 7 get 1 free discount.
var discount = discountUnits * perDay; //calculates discount amount
var zoneCost = subTotal * zoneUp; //calculates zone cost up charge amount
var total = (subTotal + zoneCost) - (discount); //calculates the total cost

var d = Number(dogCost); //d is for dogs. the cost is 15 per dog.
d *= Number(dogNum); // calculates for $15 per night for 3 dogs.

var c = Number(catCost); //c is for cats. the cost is 10 per cat.
c *= Number(catNum); // calculates for $10 per night for 1 cat.


//Outputs


console.log("My client lives in Zone " + zoneNum + ".");
//states which zone my client lives in.
console.log("I take care of all sorts of animals. One of them is " + animals[0] + ".");
//Names one of the types of animals that I can take care of.
console.log("She has " + dogNum + " " + "dogs and " + catNum + " " + "cat.");
//states how many cats and dogs my client has.
console.log("It will cost $" + d + " " + "per day for the dogs.");
//states how much it will be for the dogs per day.
console.log("It will cost $" + c + " " + "per day for the cats");
//calculates how much it will be for the cats per day.
console.log("My prices are: $" + dogCost + " " + "per dog per night and $" + catCost + " " + "per cat per night.");
//states my prices for cats and dogs per night.
console.log ("She needs my services for " + nightsNum + " " + "nights.");
//states how many nights my client needs my services.
console.log("Her subtotal for this service is $" + subTotal + ".");
//calculates subtotal for base price
console.log("Because she lives in Zone " + zoneNum + " " + ", she will be charged 10% extra. Which is an extra $" + zoneCost + ".");
//calculates up charge cost for my client's zone.
console.log("She also qualfies for the 'Book 7 nights and get 1 free' discount. Which is $" + discount + " " + " off.");
//calculates the discount amount.
console.log("Her total cost now is $ " + total + ".");
//calculates final cost for my services.





