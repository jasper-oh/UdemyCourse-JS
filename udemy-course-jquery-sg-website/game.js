let gamePattern = [];
let userClickPattern = [];
const buttonColors = ["red", "blue", "green", "yellow"];
let start = false;
let level = 0;

function startGame() {
  $(document).keypress(function () {
    if (!start) {
      $("#level-title").text("Level" + level);
      nextSequence();
      start = true;
    }
  });
}

function handler() {
  $(".btn").click(function (event) {
    const userChosenColor = event.target.id;
    userClickPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);

    checkAnswer(userClickPattern.length - 1);
  });
}

function nextSequence() {
  userClickPattern = [];
  level++;
  $("#level-title").text("Level " + level);
  const randomNumber = Math.floor(Math.random() * 4);
  const randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  console.log(gamePattern);
  $("#" + randomChosenColor)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);
  playSound(randomChosenColor);
}

function playSound(name) {
  const audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColor) {
  $(currentColor).addClass("pressed");
  setTimeout(function () {
    $(currentColor).removeClass("pressed");
  }, 1000);
}

function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickPattern[currentLevel]) {
    if (userClickPattern.length === gamePattern.length) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  } else {
    $("body").addClass("game-over");
    playSound("wrong");

    $("#level-title").text("Game Over, Press Any Key to Restart");
    setInterval(() => {
      $("body").removeClass("game-over");
    }, 1000);
    startOver();
  }
}

function startOver() {
  level = 0;
  gamePattern = [];
  start = false;
}

function init() {
  startGame();
  handler();
}
init();
