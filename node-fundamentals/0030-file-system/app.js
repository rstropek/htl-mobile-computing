const fs = require('fs');

// Get file name from command line arguments. If no arguments are
// specified, use greetings.txt.
const fileName = process.argv[2] || 'greeting.txt';

// Note that there would be a simpler function (fs.readFile) to
// read the content of a file. However, here we want to learn
// about callbacks so we use a more low-level api.

// Open the file for reading
fs.open(fileName, 'r', (err, fd) => {
  // Note that we have to handle the result in a callback
  // as node ALWAYS runs IO asynchronously.

  if (err) {
    // Do some error handling
    console.log(`Error while opening ${fileName}: ${err.message}`);
  } else {
    // Allocate a buffer and read content of file into it.
    const buffer = new Buffer(1024);
    fs.read(fd, buffer, 0, 1024, 0, (err, bytesRead, buffer) => {
      if (err) {
        console.log(`Error: ${err.message}`);
      } else {
        console.log(`Read ${bytesRead} bytes: ${buffer.toString('utf8', 0, bytesRead)}`);
      }
    });
  }
});