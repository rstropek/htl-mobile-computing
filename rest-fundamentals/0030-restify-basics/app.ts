import {createServer} from 'restify';

var server = createServer();
server.get('/api/echo/:word', (request, response, next) => {
    response.send({youSent: request.params.word});
    next();
});

const port = 8080;
server.listen(port, function() {
  console.log('API is listening');
});