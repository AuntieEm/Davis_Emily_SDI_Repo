/*
Emily Davis
March 19, 2015
Conditionals Assignment
 */

//variables
var dogPerson   = true; //variable is true for dog person
var catPerson   = true; //variable is true for cat person
var dogPrice    = 30;   //price for dogs is $30/day
var catPrice    = 15;   //price for cats is $15/day
var days        = prompt("How many days will you be needing my services?"); //ask how many days needed
if(days === "")  {  //if # of days is not entered...
    days = prompt("You didn't specify how long you need my services for."); //...then prompt again to validate
    console.log("You'll be needing my services for " + days + " days.");    //print out how many days services will be needed.
}//close if statement
days = Number(days);    //cast days var to be a number


//cat confirm
catPerson = confirm("Are you a cat person? Click Okay for true and cancel for false."); //ask if cat person

if (catPerson === true) {   //if confirm is true then...
       var cats = prompt("How many cats do you have?"); //prompt var for # of cats
    if(cats === "") {   //if # of cats is not entered then...
        cats = prompt("You didn't tell me how many cats you have.") //prompt again to validate
        cats = Number(cats);    //cast cats to be a number
    }   //close if statement
}else{  //if cat person is false then...
    console.log("Well, okay then...")}  //print out "well okay then."

//dog confirm
dogPerson = confirm("Are you a dog person? Click Okay for true and cancel for false."); //ask if dog person

if (dogPerson === true) {   //if confirm is true then...
    var dogs = prompt("How many dogs do you have?");    //prompt var for # of dogs
    if (dogs === "") {  //if # of dogs is not entered then...
        dogs = prompt("You did not tell me how many dogs you have.");   //propmt again to validate
        dogs = Number(dogs);    //cast dogs to be a number
    }   //close if statement
}else{  //if dog person is false then...
    console.log("If you don't have any cats or dogs, then why are you here?");  //Print:  What are you doing here?
}

//more variables
var dogTotal = dogs * dogPrice * days;  //total price for dogs
var catTotal = cats * catPrice * days;  //total price for cats
var total = dogTotal + catTotal;    //total price for animals
var weekDiscount = ((days / 7) * (total / days));   //calculate 1/7 of cost
var newTotal = (total - weekDiscount);  //take off 1/7 of cost
var tenPercent = (total * 10 / 100);    //calculate 10% of cost
//casting
weekDiscount = Number(weekDiscount);    //cast to number
total = Number(total);  //cast to number
newTotal = Number(newTotal);    //cast to number

console.log("Your total cost is $" + total + ".");  //print out cost before discounts

//discounts
(days >= 7) ? console.log("Congratz! You qualify for the 'Book 7 get 1' discount!") : console.log("You did not book enough days to earn the 'Book 7 get 1' discount."); //ternary to determine if they get the discount or not

if (days >= 7){ //if days booked is greater than or equal to 7...
    console.log("You booked us for " + days + " days, you get a discount of $" + weekDiscount + ".");   //print out calculated discount
    console.log("You're new total is $" + newTotal + ".");  //print out new total with discount applied

}else if ((dogs + cats) >= 4 && days <7){   //if 4 or more animals were booked AND less than 7 days were booked
    console.log("You booked us to take care of a total of " + (Number(dogs) + Number(cats)) + " animals, so you get 10% off your total.");  //print out discount awarded.
    console.log("Which is $" + tenPercent + ".");   //print out discount amount
    console.log("You're new total is $" + (total - tenPercent) + ".");  //print out new total with discount
} else{ //if nither discount applies.
    console.log("You did not earn the 10% off discount either.");   //print out no discount
    console.log("Your total is still $" + total + "."); //print out original total
}


