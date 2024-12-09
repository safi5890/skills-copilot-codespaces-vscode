// create web server

// load http module
var http = require("http");

// create http server
http.createServer(function(req, res) {
    // content header
    res.writeHead(200, {'content-type': 'text/html'});

    // write message and signal communication is complete
    res.end("Hello, world!");
}).listen(8124);

console.log('Server running on 8124');