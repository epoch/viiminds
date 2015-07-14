

var game = {

  guessedLetters: [],
  secret: [],
  puzzle: [],
  MAX_GUESSES: 8,
  wordList: ['pudding','cake','hotdogs','cakepudding'],

  test: function() {
    console.log('testing');
  },

  setSecret: function() {
    game.secret = _.sample(game.wordList).split('');
  },

  setPuzzle: function() {
    game.puzzle = Array(game.secret.length+1).join('_').split('');
  },

  guessesLeft: function() {
    return game.MAX_GUESSES - game.guessedLetters.length;
  },

  guess: function(letter) {
    game.guessedLetters.push(letter);

    // work out the puzzle display
    // if letter is k
    // secret = ['c','a','k','e']
    // puzzle = ['_','_','_','_'] => ['_','_','k','_']

    _.each(game.secret, function(secretLetter, index) {
      // check secretLetter is equal to letter
      if (secretLetter === letter) {
        game.puzzle[index] = letter; 
      }

    });
  },

  init: function() {
    game.setSecret();
    game.setPuzzle();    
  }

};


window.onload = function() {

  var ENTER_KEY = 13;

  game.init();

  var wordString = document.getElementById('wordString'); 
  wordString.innerHTML = game.puzzle; 

  var guessesLeft = document.getElementById('guessesLeft');
  guessesLeft.innerHTML = game.guessesLeft(); 

  var letterField = document.getElementById('letterField');

  letterField.addEventListener('keyup', function(event) {

    if (event.keyCode === ENTER_KEY) {
      // this keyword - 'this' is referring to the input box in this instance
      var inputValue = this.value;
      // user making a guess
      game.guess(inputValue);

      // clear input box
      this.value = '';

      // update game displays
      wordString.innerHTML = game.puzzle;
      guessesLeft.innerHTML = game.guessesLeft();
    }
  })

}