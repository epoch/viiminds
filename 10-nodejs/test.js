var foo = 'bar';

function bar() {
  var hello = 'world'
  var foo = 'baz'; // shadowing

  function baz(foo) {
    foo = 'bam';
    bam = 'yay';
  }
  baz();
}

bar();

// ------------

foo; // bar
bam; // yay
baz(); // 




var counter = 0;

var tick = function() {

  var hidden = 6;

  return function() {
    console.log(hidden);
  }

}


var makeTicker = function() {
  var counter = 0;

  var increment = function() {
    return counter++;
  }

  return increment;
}

var tick = makeTicker();

tick();
tick();

var car = {
  speed: 10
}



function carMaker(speed) {






  var speed = speed;

  var acc = function() {

  }

  var publicInterface = {
    accelerate: acc,

    setSpeed: function(speed) {
      speed = speed;
    }
  }


  return publicInterface;














}


var car = carMaker();
var car2 = carMaker()
car.acclerate();




var three_functions = [];

for (var i=0; i<3; i++) {

  var maker = function() {
    var j = i;

    var printIndex = function() {
      console.log(j);
    }
    return printIndex;
  }

  var theActualFunctionWeWant = maker();

  three_functions.push(theActualFunctionWeWant);
}

three_functions[0]();
three_functions[1]();
three_functions[2]();




// module pattern

var accountMaker = function(amount) {

  var balance = amount;

  function getBalance() {
    console.log(balance);
  }

  function deposit(amount) {
    balance += amount;
  }

  return {
    getBalance: getBalance,
    deposit: deposit
  };
}

var a1 = accountMaker(500);

a1.getBalance(); // 500
a1.deposit(20);
a1.getBalance(); // 520 