// To create a server, we need the http from the library
var http = require("http");
// Then we need to create a port as our entry
var PORT = 8080;

// We then need a file handler
function requestlistener(request, response) {
    loadPages(request, response);
}
// Then we need to create our server using the above handleler and port
var server = http.createServer(requestlistener);
// Finally, we listen to the server
server.listen(PORT, () => {console.log(`Listening to: localhost:${PORT}`)});

// Since we will need to read files from the path, we need the fs library:
var fs = require("fs");
// We then load pages
function loadPages(request, response) {
    var path = request.url;
    fs.readFile(`${__dirname}/${path}`,(err, data) => {
        if (err) throw err.message;
        response.writeHead(200, { "Content-Type": "text/html" });
        response.end(data);
    });
}