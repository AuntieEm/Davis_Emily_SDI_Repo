/*
Emily Davis
March 19, 2015
Conditionals Assignment
 */

//variables




var days        = prompt("How many days will you be needing my services?");
if(days === "")  {
    days = prompt("You didn't specify how long you need my services for.",3);
    console.log("You'll be needing my services for " + days + " days.");
}

var dogPerson     = true;
var catPerson   = true;
var dogUnder40 = 20;
var dogOver40 = 30;
var catIndoor = 10;
var catOutdoor = 5;





// console.log("I'm sorry, I don't pet sit for cats. I'm allergic.");


//casting
days = Number(days);



catPerson = confirm("Are you a cat person? Click Okay for true and cancel for false.");


//boolean conditional & outputs
if (catPerson === true) {
       console.log("I'm sorry. I don't pet sit for cats.");
}else{
    console.log("Well, okay then...")}


//confirm
dogPerson = confirm("Are you a dog person? Click Okay for true and cancel for false.");


//boolean conditional & outputs
if (dogPerson === true) {
    var dogs = prompt("How many dogs do you have?");
    if (dogs === "") {
        dogs = prompt("You did not tell me how many dogs you have.", 3);
    }
    dogs = Number(dogs);

    if (dogs >= 1) {
        var over40 = prompt("How many of them weigh over 40 pounds?");
        if (over40 === "") {
            over40 = prompt("You forgot to tell me how many of them weigh 40 pounds.");
        }
        over40 = Number(over40);
    }
    if (over40 >= 1) {
        over40 = over40 * dogOver40 * days;
        console.log("It will cost $" + over40 + " for your dogs that weigh over 40 pounds.");
    }
    else {

        var under40 = dogs * dogUnder40 * days;
        console.log("It will cost $" + under40 + " for your dogs.");
    }
    if (over40 >= 1) {
        under40 = prompt("How many of them weigh less than 40 pounds?");
        if (under40 === "") {
            under40 = prompt("You forgot to tell me how many of them weigh under 40 pounds.");
        }
        under40 = Number(under40);
        if (under40 >= 1) {
            under40 = under40 * dogUnder40 * days;
            console.log("It will cost $" + under40 + " for your dogs that weigh under 40 pounds.")
        }
    }

    console.log("Your total cost for the dogs will be $" + (under40 + over40) + ".");
}else{
    console.log("If you don't have any cats or dogs, then why are you here?")}



console.log("We have a special discount for people who book us for 7 or more days.");

(days > 7) ? console.log("You get our discount!") : console.log("You did not book enough days to earn the discount.");

var total = under40 + over40;
var weekDiscount = ((days / 7) * (total / days));
weekDiscount = Number(weekDiscount);
var newTotal = (total - weekDiscount);
newTotal = Number(newTotal);

if (days >= 7 && dogs >= 1){
    console.log("Congratz! Because you booked us for " + days + " days and you have " + dogs + " dogs, you get our special discount!");
    console.log("You've earned a discount of $" + weekDiscount + ".");
    console.log("You're new total is $" + newTotal + ".");

}else if (dogs >= 9){
    console.log("Because you booked us to take care of " + dogs + " dogs, you get 10% off your total. Discounts do not combine.");
    console.log("You're new total is $" + (total - (total * 10 / 100)) + ".");
} else{
    console.log("No discount for you.");
}





//todo comments
//todo flow chart
