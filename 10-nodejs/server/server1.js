var http = require('http');
var url = require('url');
var fs = require('fs'); // file system

var app = function(request, response) {
  console.log(new Date() + ' - ' + request.url);

  // find what path the user is coming from
  var path = url.parse(request.url).path;

  switch(path) {
    case '/':
      response.writeHead(200);
      // response.write('hello world');
      response.end('hello world');
      break;
    case '/about':

      // callback signature
      fs.readFile(__dirname + '/test.html', function(error, data) {

        console.log()
        if (error) {
          // too bad get a life
          response.write('cant read file');
          response.end();
        } else {
          response.write(data, "utf8");
          response.end();
        }

      });

      break;
    default: 
      response.writeHead(404);
      response.write('404 - opps this path does not exist');
      response.end();
      break;
  }

}

var PORT = process.argv[2] || 8000;
var server = http.createServer(app);
server.listen(PORT, function() {
  console.log('welcome to viiminds server!!!');
  console.log('listening on port ' + PORT);
});


