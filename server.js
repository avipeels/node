const http = require('http');

const server = http.createServer(function (request, response) {
    console.log(request.url, request.method, request.headers);
    response.setHeader('Content-Type', 'text/html');
    
});

server.listen(3000);