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

// Calculate 10 / 5 + 20 / 10 without printing errors
slowDiv(10, 5).then(res1 => slowDiv(20, 10).then(res2 => console.log(res1 + res2)));