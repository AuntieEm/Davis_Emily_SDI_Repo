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
    var cats = prompt("How many cats do you have?");
        if(cats === ""){
            cats = prompt("You did not tell me how many cats you have.");
        }
   if(cats >= 1) {
       console.log("I'm sorry. I don't pet sit for cats. Not unless they are outdoor cats.");
       catType = prompt("Are they outdoor cats? Yes or no?");
       if( catType === ""){
           catType = prompt("Well, are they outdoor cats or not? Yes or no?");
       }else if (catType = "yes"){
           console.log("Then in that case your total will be $" + (cats * catOutdoor * days) + ".");
       }
        }

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
        if (under40 >= 1) {
            under40 = under40 * dogUnder40 * days;
            console.log("It will cost $" + under40 + " for your dogs that weigh under 40 pounds.")
        }
    }

    console.log("Your total cost for the dogs will be $" + (under40 + over40) + ".");
}else{
    console.log("If you don't have any cats or dogs, then why are you here?")}






// TODO validate all prompts
//todo (* & +) (/ & *)
//todo ternary
// todo &&
//todo comments
