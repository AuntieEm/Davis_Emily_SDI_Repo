/**
 * Created by Alys1 on 3/10/15.
 */
//Dog Years

/*
var dogYears = 7; //7 dog years to 1 human year
var sparkyAge = prompt("How old is Sparky in human years?"); //prompts user to provide a number.
var result = sparkyAge * dogYears; //calculates how old sparky is.

console.log("Sparky is " + sparkyAge + " " + "in human years. Whis is " + result + " " + "in dog years.");
*/


//Slice of Pie part 1

/*
A bunch of students are having a party and somebody ordered a pizza. Create an expression that calculates
how much pizza each partygoer will get at the party. (Assume all pizzas have the same number of slices
and that the person dividing the pizza is really precise, so this can be a decimal, like 3.52 slices, etc.)
 */

var peopleAtParty = prompt ("How many people are attending the party?");
var pizzaOrdered = prompt ("How many pizzas did you order?");
var slicePerPizza = prompt ("How many slices are each pizza divided up into?");

var result = (peopleAtParty * 3) / (slicePerPizza) / (pizzaOrdered);

console.log("Each person ate" + " " + result + " " + "slices of pizza at the party.");