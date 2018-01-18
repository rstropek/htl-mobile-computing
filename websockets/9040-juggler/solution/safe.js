const WebSocket = require('ws');
const wss = new WebSocket.Server({port: 3000});

wss.on('connection', ws => {
  const code = Math.floor(Math.random() * 100);
  ws.on('message', message => {
      ws.send(parseInt(message) === code ? 'Correct' : 'Wrong');
  });
});