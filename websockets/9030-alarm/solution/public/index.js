const socket = io();

$("#setAlarm").click(() => {
  socket.emit('wake-me', $('#wakeInSeconds').val());
});

socket.on('wake-up', function(data) {
  $('#alarmList').append('<li>Received Wakeup Call!</li>');
});
