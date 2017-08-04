const fs = require('fs');

function run() {
  fs.readFile('read-file.js', (err, data) => {
    if (err) {
      console.error(err);
    } else {
      console.log(data.toString('UTF8').substring(0, 50) + '...');
    }
  });
}

run();
