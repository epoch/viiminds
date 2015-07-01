console.log('it works');

var counter = 0;

while (counter <= 5) {
  console.log("the value of counter is " + counter);
  // counter = counter + 1;
  // debugger;
  counter++;
}

console.log('all done');

counter = 1;
var maxValue = 20;

while (counter <= maxValue) {

  if (counter % 3 === 0 && counter % 5 === 0) {
    console.log('fizzbuzz');
  } else if (counter % 3 === 0) {
    console.log('fizz');
  } else if (counter % 5 === 0) {
    console.log('buzz');
  } else {
    console.log(counter);
  }
  counter++; // very important
}

// var secretNumber = 42;

// var guess = prompt('Enter a number'); // everything you get from the user is strings

// while (parseInt(guess, 10) !== secretNumber) { // condition for the loop to end
//   console.log('you fail life, guess again');
//   guess = prompt('Enter a number');
// }

console.log('go viiminds!!!!');

var instruments = ['ukelele','piano','cajun'];

count = 0;

while (count < instruments.length) {
  console.log(instruments[count]);
  count++;
}

for (var i = 0; i < instruments.length; i++) {
  console.log('the number ' + i + ' is ' + instruments[i]);
}

