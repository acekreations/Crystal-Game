$(document).ready(function(){
  //VARIABLES
  var userTotal = 0;

  //FUNCTIONS
  //Create random number with a min and max
  function randNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

  //Calculates and displays target number
  function displayTargetNum() {
    var targetNum = $("#targetNum");
    var num = randNum(19, 120);
    targetNum.val("");
    targetNum.val(num);
    targetNum.text(num);
  }

  //Add rand num to each crystal btn as a value
  function addCrystalBtnVal() {
    $(".crystalBtn").each(function(){
      $(this).val("");
      var val = randNum(1, 12);
      $(this).attr("value", val);
    })
  }

  //Display user total on page
  function displayUserTotal() {
    $("#userTotal").text(userTotal);
  }

  function calcUserTotal(clickedBtnVal) {
    userInput = parseInt(clickedBtnVal);
    userTotal = userTotal + userInput;
    displayUserTotal();
  }

  displayTargetNum();

  addCrystalBtnVal();

  //ACTIONS

  //When crystal btn is pressed get value and add it to the user total
  $(".crystalBtn").on("click", function() {
    var clickedBtnVal = $(this).attr("value");
    calcUserTotal(clickedBtnVal);
  })





})
