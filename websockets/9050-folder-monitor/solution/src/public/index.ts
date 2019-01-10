declare const io: any;
const socket: SocketIO.Server = io();

socket.on('add', function(data) {
  $('#changes').append(`<li>File ${data} added</li>`);
});

socket.on('remove', function(data) {
  $('#changes').append(`<li>File ${data} removed</li>`);
});
