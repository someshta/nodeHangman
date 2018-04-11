function SmartLetter(dumbLetter) {
  this.rightValue = dumbLetter;
  this.wrongValue = "_";
  this.beenGuessed = false;
  this.showLetter = function() {
    if (this.beenGuessed === true) {
      return this.rightValue;
    } else {
      return this.wrongValue;
    }
  };
  this.checkLetter = function(dumbLetter) {
    if (dumbLetter.toLowerCase() === this.rightValue.toLowerCase()) {
      this.beenGuessed = true;
    }
  };
}

module.exports = SmartLetter;
