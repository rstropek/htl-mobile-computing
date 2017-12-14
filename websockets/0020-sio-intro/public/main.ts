declare const io: SocketIOStatic;

const socket = io();
socket.on('greet', function(message) {
  console.log(`Received: ${message}`);
});
socket.emit('message', 'Hello World!');
