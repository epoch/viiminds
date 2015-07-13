// viiminds library

var Vii = {}; // namespace

Vii.each = function(arr, callback) {
  for(var i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}

Vii.query = function(cssRule) {
  return document.querySelectorAll(cssRule);
}


// usuage: it takes css syntax and return all nodes matched
// Vii.query('h3'); // anchors removed for quentin




