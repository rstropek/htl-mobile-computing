// If you have problems with the following line, try:
// import express = require('express');
import * as express from 'express';

var server = express();
server.get('/api/echo/:word', (request, response) => {
    response.send({youSent: request.params.word});
});

const port = 8080;
server.listen(port, function() {
  console.log(`API is listening on port ${port}`);
});