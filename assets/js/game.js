$(document).ready(function(){
  //VARIABLES
  var userTotal = 0;
  var targetNum = 0;
  var gameLock = false;
  var gamesWon = 0;
  var gamesLost = 0;

  //FUNCTIONS
  //Create random number with a min and max
  function randNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

  //Calculates and displays target number
  function setTargetNum() {
    var num = randNum(19, 120);
    targetNum = num;
    $("#targetNum").val("");
    $("#targetNum").val(num);
    $("#targetNum").text(num);
  }

  //Add rand num to each crystal btn as a value
  function setCrystalBtnVal() {
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

  function displayWinsLoses() {
    $("#gamesWon").text(gamesWon);
    $("#gamesLost").text(gamesLost);
  }

  function checkWinLose() {
    if (userTotal === targetNum) {
      gameLock = true;
      gamesWon++;
      $("#gameWin").css("display", "flex");
      displayWinsLoses();
    }
    else if (userTotal > targetNum) {
      gameLock = true;
      gamesLost++;
      $("#gameLost").css("display", "flex");
      displayWinsLoses();
    }
  }

  function calcUserTotal(clickedBtnVal) {
    userInput = parseInt(clickedBtnVal);
    userTotal = userTotal + userInput;
    displayUserTotal();
    checkWinLose();
  }

  function nextGame() {
    userTotal = 0;
    setTargetNum();
    setCrystalBtnVal();
    displayUserTotal();
    $("#gameWin, #gameLost").css("display", "none");
    gameLock = false;
  }

  function gameReset() {
    userTotal = 0;
    targetNum = 0;
    gameLock = false;
    gamesWon = 0;
    gamesLost = 0;
    setTargetNum();
    setCrystalBtnVal();
    displayUserTotal();
    displayWinsLoses();
    $("#gameWin, #gameLost").css("display", "none");
  }

  setTargetNum();
  setCrystalBtnVal();

  //ACTIONS

  //When crystal btn is pressed get value and add it to the user total
  $(".crystalBtn").on("click", function() {
    if (!gameLock) {
      var clickedBtnVal = $(this).attr("value");
      calcUserTotal(clickedBtnVal);
    }
  })

  $(".keepPlaying").on("click", function(){
    nextGame();
  })

  $(".resetGame").on("click", function(){
    gameReset();
  })





})
