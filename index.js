var SmartWord = require("./word.js");
var SmartLetter = require("./letter.js");
var inquirer = require("inquirer");

var dumbWords = [
  "Coconut",
  "Banana",
  "Papaya",
  "Mango",
  "Strawberry",
  "Raspberry",
  "Blackberry",
  "Blueberry",
  "Peach"
];

var randomIndex = Math.floor(Math.random() * dumbWords.length);
var currentDumbWord = dumbWords[randomIndex];
var guessesLeft = 10;
var randomSmartWord = new SmartWord(currentDumbWord);

inquirer
  .prompt([
    {
      type: "confirm",
      message: "Are you ready to play?",
      name: "confirm",
      default: true
    }
  ])
  .then(function(inquirerResponse) {
    if (inquirerResponse.confirm) {
      console.log("Lets Play");
      console.log("---You have " + guessesLeft + " guesses left---");
      console.log(randomSmartWord.smartLetters.wrongValue);
    }
  });
