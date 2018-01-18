const WebSocket = require('ws');

const ws = new WebSocket('ws://localhost:3000');

let code = 0;
ws.on('open', () => {
  checkCode();
});

function checkCode() {
  ws.send(code.toString());
}

ws.on('message', (data) => {
  if (data === 'Correct') {
    console.log(`Got it, the code is ${code}`);
    ws.close();
  } else {
    code++;
    checkCode();
  }
});
