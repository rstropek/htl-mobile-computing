function slowDiv(x, y) {
  return new Promise((resolve, reject) => {
    if (!y) {
      reject('Div by zero');
    } else {
      // Simulate long-running calculation by waiting 25ms
      setTimeout(() => resolve(x / y), 25);
    }
  });
}

async function run() {
  // Calculate 10 / 5 + 20 / 10 without printing errors
  console.log(await slowDiv(10, 5) + await slowDiv(20, 10));
}

run();