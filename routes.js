const fs = require('fs');

const requestHandler = (request, response) => {
    const url = request.url;
    const method = request.method;
    if (url === '/') {
        response.write('<html>');
        response.write('<head><title>Enter Message</title></head>');
        response.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        response.write('</html>');
        return response.end();
    }
    if (url === "/message" && method === "POST") {
        const body = [];
        request.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        request.on('end', () => {
            const parsedBOdy = Buffer.concat(body).toString();
            const message = parsedBOdy.split('=')[1];
            fs.writeFile('message.txt', message, (err) => {
                response.statusCode = 302;
                response.setHeader('Location', '/');
                return response.end();
            });
        });
    }
    // console.log(request.url, request.method, request.headers);
    response.setHeader('Content-Type', 'text/html');
    response.write('<html>');
    response.write('<head><title>Node Server</title></head>');
    response.write('<body>This is from node server</body>');
    response.write('</html>');
    response.end();
};

module.exports = requestHandler;
