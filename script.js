
// Define an array of colors
const colors = ['red', 'blue', 'green', 'yellow'];

// Initialize variables
let gamePattern = [];
let userClickedPattern = [];
let level = 0;
let started = false;


// Add event listener to document to start game
$(document).keydown(startGame);


// Function to start the game
function startGame() {
  if (!started) {
    $('h1').text(`Level ${level}`);
    nextSequence();
    started = true;
  }
}

// Add event listener to button
$('.btn').click(handleClick);

// Function to handle user click on button
function handleClick() {
  const userChosenColor = this.id;
  userClickedPattern.push(userChosenColor);
  animateButton(userChosenColor);
  playSound(userChosenColor);
  checkAnswer(userClickedPattern.length - 1);
}



// Function to check if user's sequence matches the game's sequence
function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    if (gamePattern.length === userClickedPattern.length) {
      setTimeout(nextSequence, 1000);
    }
  } else {
    playSound('wrong');
    $('body').addClass('game-over');
    setTimeout(() => {
      $('body').removeClass('game-over');
    }, 200);
    $('h1').text('Game Over, Press Any Key to Restart');
    startOver();
  }
}

//Function to show next sequence
function nextSequence() {
  userClickedPattern = [];
  const randomNumber = Math.floor(Math.random() * 4);
  const randomChosenColor = colors[randomNumber];
  gamePattern.push(randomChosenColor);
  $(`#${randomChosenColor}`).fadeOut(100).fadeIn(100);
  playSound(randomChosenColor);
  level++;
  $('h1').text(`Level ${level}`);
}


// Function to animate button based on color name
function animateButton(name) {
  $(`#${name}`).addClass('pressed');
  setTimeout(() => {
    $(`#${name}`).removeClass('pressed');
  }, 100);
}


// Function to play sound based on color name
function playSound(name) {
  const sound = new Audio(`sounds/${name}.mp3`);
  sound.play();
}


// Function to reset the game
function startOver() {
  gamePattern = [];
  userClickedPattern = [];
  level = 0;
  started = false;
}

