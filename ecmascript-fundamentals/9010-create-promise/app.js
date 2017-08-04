const fs = require('fs');

function readTextFilePromise(path) {
  return new Promise((res, rej) => {
    fs.readFile(path, (err, data) => {
      if (err) {
        rej(err);
      } else {
        res(data.toString('UTF8'));
      }
    });
  });
}

async function run() {
  console.log((await readTextFilePromise('app.js')).substring(0, 50) + '...');
}

run();
