import * as express from 'express';
import * as http from 'http';
import * as sio from 'socket.io'
const app = express();
const server = http.createServer(app);
const io = sio(server);

const port: (string|number) = process.env.PORT || 3000;
server.listen(port, function() {
  console.log('Webserver listens on Port %d', port);
});

app.use(express.static(__dirname + '/public'));

io.on('connection', function(socket) {
  let addedUser = false;
  let username = '';

  socket.on('add user', function(newUserName) {
    username = newUserName;
    addedUser = true;

    socket.emit('login');

    socket.broadcast.emit('user joined', username);
  });

  socket.on('new message', function(data) {
    socket.broadcast.emit('new message', {username: username, message: data});
  });

  socket.on('disconnect', function() {
    if (addedUser) {
      socket.broadcast.emit('user left', username);
    }
  });
});
