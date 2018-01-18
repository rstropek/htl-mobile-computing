const express = require('express');
const app = express();
const http = require('http');
const sio = require('socket.io');

const server = http.createServer(app);
const io = sio(server);

app.use(express.static(__dirname + '/public'));
server.listen(8080, () => console.log('Webserver is listening'));

io.on('connection', function(socket) {
  socket.on('wake-me', function(seconds) {
    setTimeout(() => socket.emit('wake-up', 'This is your wakeup call!'), 
      parseInt(seconds) * 1000);
  });
});
