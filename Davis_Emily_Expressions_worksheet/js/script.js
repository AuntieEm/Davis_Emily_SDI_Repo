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

/*
var peopleAtParty = prompt ("How many people are attending the party?");
var pizzaOrdered = prompt ("How many pizzas did you order?");
var slicePerPizza = prompt ("How many slices is each pizza divided up into?");

var result = (pizzaOrdered * slicePerPizza) / peopleAtParty;

console.log("Each person ate" + " " + result + " " + "slices of pizza at the party.");



//Slice of Pie Part 2

var sparkyNom = (slicePerPizza * pizzaOrdered) % peopleAtParty;

console.log("Sparky got " + sparkyNom + " " + "slices of pizza.");
*/

//Average shopping bill
/*
var weak1 = prompt ("How much did you spend on groceries 5 weeks ago?")
var weak2 = prompt ("4 weeks ago?");
var weak3 = prompt ("3 weeks ago?");
var weak4 = prompt ("2 weeks ago?");
var weak5 = prompt ("1 week ago?");


var groceryTotals = [Number(weak1), Number(weak2), Number(weak3), Number(weak4), Number(weak5)];
var total = Number(groceryTotals[0]) + Number(groceryTotals[1]) + Number(groceryTotals[2]) + Number(groceryTotals[3]) + Number(groceryTotals[4])
var average = total / 5;

console.log("You have spent a total of $" + total + " " + "on groceries over 5 weeks.")
console.log("That is an average of $" + average + " " + "per week.");
*/

//Discounts

var itemName = prompt ("What are you trying to buy?");
var itemCost = prompt ("What is the price listed on the shelf at the store?");
var discount = prompt ("What is the discount advertized?");
var salesTax = prompt ("How much is the sales tax in your area?");
var discountResult = (Number(itemCost) - (Number(itemCost) * (Number(discount) / 100)));
var salesTaxResult = (Number(discountResult) * (Number(salesTax) / 100) + Number(discountResult));



console.log("Your " + itemName + " " + " was originally $" + itemCost + ".");
console.log("After a " + discount  + "% discount, it is now $" + discountResult + " " + "without tax.");
console.log("Your item will cost $" + salesTaxResult + " " + "after sales tax is applied." );

