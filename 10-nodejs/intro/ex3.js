// write a command line program
// accepts numbers as arguments
// sum it and print the result

// hint: type conversion

// parseInt, Number, unary +


var total = 0;

for (var i=2; i<process.argv.length; i++) {
  total += Number(process.argv[i]);
}

console.log('sum: ', total);