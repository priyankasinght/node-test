const http = require('http');

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello, World!');
  } else {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('404 Error: Page not found');
  }
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});