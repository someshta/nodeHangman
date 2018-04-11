var SmartLetter = require("./letter.js");

function SmartWord(dumbWord) {
  this.smartLetters = createSmartLetters(dumbWord);
  this.showSmartLetters = function() {
    var smartString = "";
    for (var j = 0; j < this.smartLetters.length; j++) {
      var smartLetter = this.smartLetters[j];
      var charToShow = smartLetter.showLetter();
      smartString += " " + charToShow;
    }
    return smartString;
  };
  this.checkLetter = function(dumbLetter) {
    for (var j = 0; j < this.smartLetters.length; j++) {
      var smartLetter = this.smartLetters[j];
      smartLetter.checkLetter(dumbLetter);
    }
  };
}

function createSmartLetters(dumbWord) {
  var smartLetterArray = [];
  for (var i = 0; i < dumbWord.length; i++) {
    var smartLetter = new SmartLetter(dumbWord[i]);
    smartLetterArray.push(smartLetter);
  }
  return smartLetterArray;
}

module.exports = SmartWord;
