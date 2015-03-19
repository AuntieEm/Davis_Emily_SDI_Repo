/*
Emily Davis
March 19, 2015
Conditionals Assignment
 */

//variables
var dogPerson     = true;
var catPerson   = true;
var dogPrice = 30;
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
       console.log("I'm sorry. I don't pet sit for cats.");
}else{
    console.log("Well, okay then...")}

//dog confirm
dogPerson = confirm("Are you a dog person? Click Okay for true and cancel for false.");

if (dogPerson === true) {
    var dogs = prompt("How many dogs do you have?");
    if (dogs === "") {
        dogs = prompt("You did not tell me how many dogs you have.", 3);
        dogs = Number(dogs);
    }
}else{
    console.log("If you don't have any cats or dogs, then why are you here?");
}

//more variables
var total = dogs * dogPrice * days;
var weekDiscount = ((days / 7) * (total / days));
weekDiscount = Number(weekDiscount);
var newTotal = (total - weekDiscount);
var tenPercent = (total * 10 / 100)
newTotal = Number(newTotal);

console.log("Your total cost is $" + total + ".");

//discounts
(days > 7) ? console.log("Congratz! You qualify for the 'Book 7 get 1' discount!") : console.log("You did not book enough days to earn the 'Book 7 get 1' discount.");

if (days >= 7){
    console.log("You booked us for " + days + " days, you get a discount of $" + weekDiscount + ".");
    console.log("You're new total is $" + newTotal + ".");

}else if (dogs >= 4 && days <7){
    console.log("You booked us to take care of " + dogs + " dogs, so you get 10% off your total.");
    console.log("Which is $" + tenPercent + ".");
    console.log("You're new total is $" + (total - tenPercent) + ".");
} else{
    console.log("You did not earn the 10% off discount either.");
    console.log("Your total is still $" + total + ".");
}


