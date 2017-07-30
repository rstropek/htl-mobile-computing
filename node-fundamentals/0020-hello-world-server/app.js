const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url.startsWith('/api')) {
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = 200;
    res.write(JSON.stringify({foo: 'bar', answer: 42}));
    res.end();
  } else {
    res.statusCode = 404;
    res.write('Sorry, don\'t know what you mean...');
    res.end();
  }
});

const port = 8000;
console.log(`Listening on port ${port}...`);
server.listen(port);
