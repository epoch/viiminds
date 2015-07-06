
var flipCoin = function() {
  if (Math.random() > 0.5) {
    return 'head';
  } else {
    return 'tails';
  }
}

// game

var winner = '';
var headCount = 0;
var tailsCount = 0;

var flipCoinButton = document.getElementById()

var playGame = function() {
  // update score

  // check who won
  console.log
}

flipCoinButton.addEventListener('click', playGame)







































var flipCoin = function() {
  if (Math.random() > 0.5) {
    return 'head';
  } else {
    return 'tail';
  }
}


var headCount = 0;
var tailCount = 0;

var winner = '';

while (winner === '') {

  result = flipCoin();

  if (result === 'head') {
    headCount++;
  } else
    tailCount++;
  }

  // check winner

  if (headCount >= 5) {
    winner = 'heads';
  }

  if (tailCount >= 5) {
    winner = 'tails';
  }
}
