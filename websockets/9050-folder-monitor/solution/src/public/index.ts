declare const io: SocketIOStatic;
const socket = io();

socket.on('add', function(data) {
  $('#changes').append(`<li>File ${data} added</li>`);
});

socket.on('remove', function(data) {
  $('#changes').append(`<li>File ${data} removed</li>`);
});
