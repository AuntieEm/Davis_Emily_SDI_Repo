/**
 * Created by Alys1 on 3/10/15.
 */
//Dog Years

/*
var dogYears = 7; //7 dog years to 1 human year
var sparkyAge = prompt("How old is Sparky in human years?"); //prompts user to provide a number.
var result = sparkyAge * dogYears; //calculates how old sparky is.

console.log("Sparky is " + sparkyAge + " " + "in human years. Which is " + result + " " + "in dog years.");
*/


//Slice of Pie part 1


var peopleAtParty = prompt ("How many people are attending the party?");
var pizzaOrdered = prompt ("How many pizzas did you order?");
var slicePerPizza = prompt ("How many slices is each pizza divided up into?");

var result = (pizzaOrdered * slicePerPizza) / peopleAtParty;

console.log("Each person ate" + " " + result + " " + "slices of pizza at the party.");



//Slice of Pie Part 2

var sparkyNom = (slicePerPizza * pizzaOrdered) % peopleAtParty;

console.log("Sparky got " + sparkyNom + " " + "slices of pizza.");

