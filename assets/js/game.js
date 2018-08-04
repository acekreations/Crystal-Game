$(document).ready(function(){
  //VARIABLES
  //Rand num that is used as the goal for the player to reach
  var computerNum = randNum(19, 120);
  //Rand num for each of the crystal buttons
  var crystalNum = randNum(1, 12);

  //FUNCTIONS
  //Create random number with a min and max
  function randNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

  function functionName() {

  }







})
