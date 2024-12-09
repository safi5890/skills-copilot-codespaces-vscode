// Create web browser

// Load the http module to create an http server.
var http = require('http');
var fs = require('fs');
var url = require('url');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  var path = url.parse(request.url).pathname;

  switch (path) {
    case '/':
      response.writeHead(200, {"Content-Type": "text/html"});
      response.write(fs.readFileSync(__dirname + '/index.html'));
      response.end();
      break;
    case '/comments':
      response.writeHead(200, {"Content-Type": "application/json"});
      response.write(JSON.stringify(comments));
      response.end();
      break;
    default:
      response.writeHead(404);
      response.write("404 - Page not found");
      response.end();
  }
});

// Listen on port 8000, IP defaults to