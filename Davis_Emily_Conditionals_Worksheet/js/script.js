/*
Emily Davis
March 18, 2015
Conditionals Worksheet
 */

//Group 1:  Expressions with conditionals - Last Chance for Gas!

var carMpg = 30;
var gaugeReading = 9; //gallons left
var tankCapacity = 12;

console.log("Group 1:  Expressions with Conditionals - Last Chance for Gas!");
console.log("Output option 1:");

if (((carMpg * tankCapacity) - (carMpg * gaugeReading))< 200){
    console.log("Yes, you can make it without stopping for gas!");
}
//prints:  You can make it
else{
    console.log("You only have " + gaugeReading + " gallons of gas in your tank, better get gas now while you can!");
}

console.log("Output option 2:");

var gaugeReading = 3; //gallons left

if (((carMpg * tankCapacity) - (carMpg * gaugeReading))< 200){
    console.log("Yes, you can make it without stopping for gas!");
}
//prints:  You can make it
else{
    console.log("You only have " + gaugeReading + " gallons of gas in your tank, better get gas now while you can!");
}



//Group 2:  Multiple Results - Check the Login
/*
console.log("Group 2:  Multiple Results - Check the Login");
console.log("Output 1:");

var usernameEntered = prompt("Please enter your username here.","Texas Gurl");
var passwordEntered = prompt("Please enter your password here.","paswrd");
var correctUsername = "Texas Girl";
var correctPassword = "PASSWORD";

if(usernameEntered === correctUsername){
    if(passwordEntered === correctPassword){
        console.log("Welcome " + correctUsername + "!");
    }
}else{
    console.log("User not found. Try again.");
}

console.log("Output 2:");

var usernameEntered = prompt("Please re-enter your username here.","Texas Girl");
var passwordEntered = prompt("Please re-enter your password.","paswrd");

if(passwordEntered === correctPassword){
    if(usernameEntered === correctUsername) {
        console.log("Welcome " + correctUsername + "!");
    }
}else{
    console.log("Password does not match our records. Please try again.");
}

var usernameEntered = prompt("Please re-re-enter your username here.","Texas Girl");
var passwordEntered = prompt("Please re-re-enter your password.","PASSWORD");

if(passwordEntered === correctPassword) {
    if (usernameEntered === correctUsername) {
        console.log("Welcome " + correctUsername + "!");
    }
}

*/

//Group 3:  Multiple Conditions - Movie Ticket Price

console.log("Group 3:  Multiple Conditions - Movie Ticket Price");

var movieTime = prompt("What time does the movie start? Please use military time.");
var customerAge = prompt("How old are you?");
var normalPrice = 12;
var discountPrice = 7;

// customerAge >= 55 then discount price
// customerAge <= 10 then discount price
// movieTime

if ((customerAge >= 55 || customerAge <= 10) && (movieTime >= 1500 && movieTime <= 1700))  {
    console.log("The ticket price is $" + discountPrice + ".");
}else{
    console.log("The ticket price is $" + normalPrice + ".");
}
