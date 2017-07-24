// Note the import of the core module `http`
// More details: https://nodejs.org/api/modules.html#modules_core_modules
const http = require('http');

// Note that there are better ways to implement a web server or
// web apis by using powerful frameworks. However, here we want to learn
// about Node.js fundamentals, so we use a more low-level api.

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

console.log('Listening...');
server.listen(8000);
