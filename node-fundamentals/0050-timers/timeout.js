console.log('Waiting for three seconds...');
setTimeout(() => {
  console.log('two...')
  setTimeout(() => {
    console.log('one...');
    setTimeout(() => {}, 1000);
  }, 1000);
}, 1000);