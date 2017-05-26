//Set initial values to zero
var total = 0;
var wins = 0;
var losses = 0;

//Generate random number between 19 and 120
var randomNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;

//Crystal Numbers guessed between 1 and 12
var blueNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
var redNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
var yellowNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
var greenNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1;

$(document).ready(function() {

//Apend Inital Values
  $("#random").append(randomNumber);
  $("#result").html('In Progress...');

//Logic when Blue Crystal is clicked
  $("#blue").on("click", function() {
    $("#result").html('In Progress...');
    total = blueNumber + total;
    $("#total").html(total);
//Win if number matches
    if (total === randomNumber) {
      wins = wins+1;
      $("#win").html(wins);
      randomNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
      $("#random").html(randomNumber);
      blueNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
      total = 0;
      $("#total").html(total);
      $("#result").html('You Win!');
    }
//Loss if number goes over
    if (total > randomNumber) {
      losses = losses+1;
      $("#loss").html(losses);
      randomNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
      $("#random").html(randomNumber);
      blueNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
      total = 0;
      $("#total").html(total);
      $("#result").html('You Lose!');
    }
  });

//Same logic when Red Crystal is clicked
  $("#red").on("click", function() {
    $("#result").html('In Progress...');
    total = redNumber + total;
    $("#total").html(total);
    if (total === randomNumber) {
      wins = wins+1;
      $("#win").html(wins);
      randomNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
      $("#random").html(randomNumber);
      redNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
      total = 0;
      $("#total").html(total);
      $("#result").html('You Win!');
    }
    if (total > randomNumber) {
      losses = losses+1;
      $("#loss").html(losses);
      randomNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
      $("#random").html(randomNumber);
      redNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
      total = 0;
      $("#total").html(total);
      $("#result").html('You Lose!');
    }
  });

//Same logic when Yellow Crystal is clicked
  $("#yellow").on("click", function() {
    $("#result").html('In Progress...');
    total = yellowNumber + total;
    $("#total").html(total);
    if (total === randomNumber) {
      wins = wins+1;
      $("#win").html(wins);
      randomNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
      $("#random").html(randomNumber);
      yellowNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
      total = 0;
      $("#total").html(total);
      $("#result").html('You Win!');
    }
    if (total > randomNumber) {
      losses = losses+1;
      $("#loss").html(losses);
      randomNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
      $("#random").html(randomNumber);
      yellowNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
      total = 0;
      $("#total").html(total);
      $("#result").html('You Lose!');
    }
  });

//Same logic when Green Crystal is clicked
  $("#green").on("click", function() {
    $("#result").html('In Progress...');
    total = greenNumber + total;
    $("#total").html(total);
    if (total === randomNumber) {
      wins = wins+1;
      $("#win").html(wins);
      randomNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
      $("#random").html(randomNumber);
      greenNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
      total = 0;
      $("#total").html(total);
      $("#result").html('You Win!');
    }
    if (total > randomNumber) {
      losses = losses+1;
      $("#loss").html(losses);
      randomNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
      $("#random").html(randomNumber);
      greenNumber = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
      total = 0;
      $("#total").html(total);
      $("#result").html('You Lose!');
    }
  });

});
