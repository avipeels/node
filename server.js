const http = require('http');

const server = http.createServer(function (request, response) {
    const url = request.url;
    if (url === '/') {
        response.write('<html>');
        response.write('<head><title>Enter Message</title></head>');
        response.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        response.write('</html>');
        return response.end();
    }
    console.log(request.url, request.method, request.headers);
    response.setHeader('Content-Type', 'text/html');
    response.write('<html>');
    response.write('<head><title>Node Server</title></head>');
    response.write('<body>This is from node server</body>');
    response.write('</html>');
    response.end();
});

server.listen(3000);