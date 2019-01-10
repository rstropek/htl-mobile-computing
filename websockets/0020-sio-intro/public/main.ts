declare const io: any; // This object will be provided by Socket.io

const socket: SocketIO.Server = io();
socket.on('greet', function(message) {
  console.log(`Received: ${message}`);
});
socket.emit('message', 'Hello World!');
