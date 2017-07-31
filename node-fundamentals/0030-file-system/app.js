// Use file name from command line or `greetings.txt` if no arguments were specified
const fileName = process.argv[2] || 'greeting.txt'; // Note *coalesce* operation

// Open the file for reading
const fs = require('fs');
fs.open(fileName, 'r', (err, fd) => {
  if (err) {
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