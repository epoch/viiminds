console.log('hello world');

// async
// setTimeout(function(){
//   console.log('waiting...');
// }, 5000); // not blocking

// console.log('hello again');

var timer = setInterval(function() {
  console.log('heart beat');
}, 1000); 