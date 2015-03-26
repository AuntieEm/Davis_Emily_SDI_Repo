/*
Emily Davis
March 26, 2015
Functions Assignment
 */

/*-------------------- VARIABLES --------------------*/
var lotteryChoice = prompt("Which lottery would you like to play?\n\nThe Florida Lottery or the Powerball?", "Florida");   //prompt user for a lottery choice.
var flLottery;  //florida lottery variable
var pbLottery;  //florida lottery variable
var pbLotteryPb;    //florida lottery variable

/*-------------------- FUNCTIONS --------------------*/

function lotteryValidation(choice)  {   //call new function to validate lottery choice prompt only 1 argument
    var timesClicked = 1;   // variable to determine how many times "ok" is clicked without the user typing anything in.

    while (choice === "")   { // start while loop. if a choice is not made then...
        choice = prompt("You must choose which lottery you would like to play.\n\n Florida or Powerball?"); //prompt user to make a choice

        timesClicked++; //each time "OK" is clicked...

        if (timesClicked === 2)    {    //conditional  if "ok" is clicked twice with out any user input then...
            console.log("Since you can't make a decision, I shall choose for you.");    //print to console a choice has been made for you
            console.log("You're playing the Florida lottery.");   //print the automatic choice
            break;  // ends loop after 2 clicks
        }

    }
    return choice;  //passes value of choice over to main code
}
lotteryChoice = lotteryValidation(lotteryChoice);   // sends the value of lotteryChoice to value of lotteryValidation


//Florida Lottery Function

    function randomFlNumGen(min, max, num) {    //call new function to generate random numbers for the florida lottery

        var floridaArray = [];  //variable to define a new array
        for (var f = 0; f < num; f++) { // for loop to determine how many numbers will be generated based on what has already been output

            var floridaLottery = Math.round(Math.random() * (max - min) + min); //the variable will generate a random number using the parameters min and max
            floridaArray[f] = floridaLottery;   //the floridaArray index 0  now be the variable for floridaLottery
        }

        return floridaArray; //return the variable floridaArray to the main code.
    }
    flLottery = randomFlNumGen(1, 53, 5);   //the variable will use the above function to generate 5 numbers between 1 & 53.


//Powerball Function
function randomPbNumGen(min, max, num) {    //call new function to generate random numbers for the powerball lottery

    var powerBallArray = [];    //variable to define a new array
    for (var f = 0; f < num; f++) { // for loop to determine how many numbers will be generated based on what has already been output

        var powerBallLottery = Math.round(Math.random() * (max - min) + min);   //the variable will generate a random number using the parameters min and max
        powerBallArray[f] = powerBallLottery;   //the floridaArray index 0  now be the variable for powerBallLottery
    }

    return powerBallArray;  //return the variable powerBallArray to the main code.
}
pbLottery = randomPbNumGen(1, 59, 5);   //the variable will use the above function to generate 5 numbers between 1 & 59.


//Powerball powerball function
function randomPbPbNumGen(min, max, num) {  //call new function to generate random numbers for the powerball's powerball

    var powerBallPbLottery = Math.round(Math.random() * (max - min) + min); //the variable will generate a random number using the parameters min and max

    return powerBallPbLottery;  //return the variable powerBallPbLottery to the main code.
}
pbLotteryPb = randomPbPbNumGen(1, 35, 1); //the variable will use the above function to generate 5 numbers between 1 & 59.


/*-------------------- OUTPUT --------------------*/


console.log("So, I see you've chosen to play the " + lotteryChoice + " lottery.");  // print choice the user made.
(lotteryChoice === "Florida") ? console.log("Florida lottery numbers are... " + flLottery + ".") : console.log("Powerball lottery numbers are... " + pbLottery + ". And the powerball is..." + pbLotteryPb + ".");
//ternary to decide which function to run depending on the input the user made as to which lottery they would like to play.