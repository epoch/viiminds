
var theSpecialOne = document.getElementById('theSpecialOne');

theSpecialOne.innerHTML = 'not so special at all';

var winButton = document.getElementsByTagName('button')[0]; // grab first elem out of array

var doSomething = function() {
  console.log('doing something');
}

winButton.addEventListener('click', doSomething); // callback function