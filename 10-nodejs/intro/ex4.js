// make a get request to www.google.com
// or make a get request to omdbapi http://omdbapi.com/?t=jaws

var http = require('http');
var url = 'http://omdbapi.com/?t=jaws'; 

// callback signature
var callback = function(response) {

  response.setEncoding('utf8');
  
  response.on('data', function(data) {
    console.log(data);
  });

}

http.get(url, callback);



























// http.get(url, function(response) {
//   response.setEncoding('utf8');

//   response.on('data', function(data) {
//     console.log(data);
//   });
// });
