var movePixels = 10;
var delayMs = 50;
var catTimer = null;
var goRight = true;


function catWalk() {
  var img = document.getElementsByTagName('img')[0];
  var currentLeft = parseInt(img.style.left);

  if (goRight) {
    img.style.left = (currentLeft + movePixels) + 'px';  
  } else {
    img.style.left = (currentLeft - movePixels) + 'px';  
  }

  if (goRight === true && currentLeft > (window.innerWidth-img.width)) {
    goRight = false;
    img.style.transform = "scaleX(-1)";
  } else if (goRight === false && currentLeft < 0) {
    goRight = true;
    img.style.transform = "scaleX(1)";    
  }

  // if (currentLeft > (window.innerWidth-img.width)) {
  //   img.style.left = '0px';
  // }
}

function startCatWalk() {
  if (catTimer !== null) {
    return;
  }
  catTimer = window.setInterval(catWalk, delayMs);
}
function stopCatWalk() {
  clearInterval(catTimer);
  catTimer = null;
}
function accelerate() {

}

var startBtn = document.getElementById('start-button');
startBtn.addEventListener('click', startCatWalk);

var stopBtn = document.getElementById('stop-button');
stopBtn.addEventListener('click', stopCatWalk);

var speedBtn = document.getElementById('speed-button');
speedBtn.addEventListener('click', accelerate);