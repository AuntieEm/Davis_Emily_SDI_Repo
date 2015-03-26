/*
Emily Davis
March 26, 2015
Functions Assignment
 */

/*-------------------- VARIABLES --------------------*/
var lotteryChoice = prompt("Which lottery would you like to play?\n\nThe Florida Lottery or the Powerball?", "Florida");   //prompt user for a lottery choice.
var flLottery;
var pbLottery;
var pbLotteryPb;

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

    function randomFlNumGen(min, max, num) {

        var floridaArray = [];
        for (var f = 0; f < num; f++) {

            var floridaLottery = Math.round(Math.random() * (max - min) + min);
            floridaArray[f] = floridaLottery;
        }

        return floridaArray;
    }
    flLottery = randomFlNumGen(1, 53, 5);
   // console.log("Florida lottery numbers are..." + flLottery);


//Powerball Function
function randomPbNumGen(min, max, num) {

    var powerBallArray = [];
    for (var f = 0; f < num; f++) {

        var powerBallLottery = Math.round(Math.random() * (max - min) + min);
        powerBallArray[f] = powerBallLottery;
    }

    return powerBallArray;
}
pbLottery = randomPbNumGen(1, 53, 5);
//console.log("Powerball lottery numbers are..." + pbLottery);


//Powerball powerball function
function randomPbPbNumGen(min, max, num) {

    var powerBallPbLottery = Math.round(Math.random() * (max - min) + min);

    return powerBallPbLottery;
}
pbLotteryPb = randomPbNumGen(1, 35, 1);
//console.log("And your powerball number is..." + pbLotteryPb);


/*-------------------- OUTPUT --------------------*/


console.log("So, I see you've chosen to play the " + lotteryChoice + " lottery.");  // print choice the user made.
(lotteryChoice === "Florida") ? console.log("Florida lottery numbers are..." + flLottery) : console.log("Powerball lottery numbers are..." + pbLottery + "And the powerball is..." + pbLotteryPb);