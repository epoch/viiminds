// function accelerate() {

// }

function doSomething() {
  console.log('nothing really');
}


var car = { 
  colour: 'black', 
  make: 'ford', 
  speed: 0,
  accelerate: function() {
    console.log('going faster than life');
  }
};

for (var key in car) {
  console.log(key + ': ' + car[key]);
}


// never use for in loop for array 