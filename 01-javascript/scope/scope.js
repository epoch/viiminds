var secretPlan = 'rob the bank';

function bubble() {
  var x = 2;

  console.log(x);

  console.log(secretPlan);
}

// bubble();


function outer() {

  var visibleToInner = 1;

  function inner() {

    var hiddenFromOuter = 2;
    console.log(visibleToInner);

  }

  // running inner we can see visibleToInner
  // visibleToInner is defined inside the inner function
  inner();

  console.log(hiddenFromOuter); // will be undefined

}

// var x = 3;

// function getX() {
//   var x = 4;


//   console.log(x);
// }

// console.log(x); // 3

// var x = 5;

// console.log(x); // 5


var x = 1; // declared globally


modify();

// function expression
var expectedUnmodified = function() {
  return x === 1;
}

console.log( expectedUnmodified() );

// function declaration
function modify() {
  x++;
}




