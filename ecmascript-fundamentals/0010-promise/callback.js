function slowDiv(x, y, resultCallback) {
  if (!y) {
    callback('Div by zero', null);
  } else {
    // Simulate long-running calculation by waiting 25ms
    setTimeout(() => resultCallback(null, x / y), 25);
  }
}

// Calculate 10 / 5 + 20 / 10 without printing errors
slowDiv(10, 5, (err, res1) => {
  if (!err) {
    slowDiv(20, 10, (err, res2) => {
      if (!err) {
        console.log(res1 + res2);
      }
    });
  }
})