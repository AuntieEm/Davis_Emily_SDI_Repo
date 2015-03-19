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

var petType     = true;
var dogUnder40 = 20;
var dogOver40 = 30;
var catIndoor = 10;
var catOutdoor = 5;








//casting
days = Number(days);

//confirm
petType = confirm("What type of pet(s) do you have? Click Okay for dogs and cancel for cats.");
if(petType === "")  {
    petType = prompt("You forgot to to specify what type of pet you have.");
}

//boolean conditional & outputs
if (petType === true) {
    // true = dogs
    var dogs = prompt("How many dogs do you have?",3);
    if(dogs === "") {
        
    }
    dogs = Number(dogs);
}

if (dogs >= 1)   {
    var over40 = prompt("How many of them weigh over 40 pounds?");
    over40 = Number(over40);
}
if (over40 >= 1) {
    over40 = over40 * dogOver40 * days;
    console.log("It will cost $" + over40 + " for your dogs that weigh over 40 pounds.");
}
else    {

    var under40 = dogs * dogUnder40 * days;
    console.log("It will cost $" + under40 + " for your dogs.");
}
if (over40 >= 1) {
    under40 = prompt("How many of them weigh less than 40 pounds?");
    if(under40 >=1) {
        under40 = under40 * dogUnder40 * days;
        console.log("It will cost$" + under40 + " for your dogs that weigh under 40 pounds.")
    }
}

console.log("Your total cost for the dogs will be $" + (under40 + over40) + ".");




// TODO validate all prompts
//todo else if
//todo (* & +) (/ & *)
//todo ternary
// todo &&
//todo comments
