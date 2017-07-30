// Read more about `console` at https://nodejs.org/api/console.html
console.log('This is a log message');
console.info('This is an info message');
console.error('This is an error message');

// Read more abour `readline` at https://nodejs.org/api/readline.html
const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);
rl.question('Please enter your name: ', function(answer) {
  console.log(`Hi ${answer}`);
  rl.close();
});