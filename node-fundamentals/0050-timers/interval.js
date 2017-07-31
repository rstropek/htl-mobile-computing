let counter = 2;
console.log('Waiting for three seconds...');
const timer = setInterval(() => {
  switch (counter) {
    case 2:
      console.log('two...');
      break;
    case 1:
      console.log('one...');
      break;
    default:
      clearInterval(timer);
  }
  counter--;
}, 1000);