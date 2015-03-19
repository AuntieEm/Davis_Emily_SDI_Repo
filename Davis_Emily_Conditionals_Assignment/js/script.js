/*
Emily Davis
March 19, 2015
Conditionals Assignment
 */

//variables
var dogPerson     = true;
var catPerson   = true;
var dogPrice = 30;
var catPrice = 15;
var days        = prompt("How many days will you be needing my services?");
if(days === "")  {
    days = prompt("You didn't specify how long you need my services for.",3);
    console.log("You'll be needing my services for " + days + " days.");
}
//casting
days = Number(days);


//cat confirm
catPerson = confirm("Are you a cat person? Click Okay for true and cancel for false.");

if (catPerson === true) {
       var cats = prompt("How many cats do you have?");
    if(cats === "") {
        cats = prompt("You didn't tell me how many cats you have.")
        cats = Number(cats);
    }
}else{
    console.log("Well, okay then...")}

//dog confirm
dogPerson = confirm("Are you a dog person? Click Okay for true and cancel for false.");

if (dogPerson === true) {
    var dogs = prompt("How many dogs do you have?");
    if (dogs === "") {
        dogs = prompt("You did not tell me how many dogs you have.");
        dogs = Number(dogs);
    }
}else{
    console.log("If you don't have any cats or dogs, then why are you here?");
}

//more variables
var dogTotal = dogs * dogPrice * days;
var catTotal = cats * catPrice * days;
var total = dogTotal + catTotal;
total = Number(total);
var weekDiscount = ((days / 7) * (total / days));
weekDiscount = Number(weekDiscount);
var newTotal = (total - weekDiscount);
var tenPercent = (total * 10 / 100)
newTotal = Number(newTotal);

console.log("Your total cost is $" + total + ".");

//discounts
(days >= 7) ? console.log("Congratz! You qualify for the 'Book 7 get 1' discount!") : console.log("You did not book enough days to earn the 'Book 7 get 1' discount.");

if (days >= 7){
    console.log("You booked us for " + days + " days, you get a discount of $" + weekDiscount + ".");
    console.log("You're new total is $" + newTotal + ".");

}else if ((dogs + cats) >= 4 && days <7){
    console.log("You booked us to take care of a total of " + (Number(dogs) + Number(cats)) + " animals, so you get 10% off your total.");
    console.log("Which is $" + tenPercent + ".");
    console.log("You're new total is $" + (total - tenPercent) + ".");
} else{
    console.log("You did not earn the 10% off discount either.");
    console.log("Your total is still $" + total + ".");
}


