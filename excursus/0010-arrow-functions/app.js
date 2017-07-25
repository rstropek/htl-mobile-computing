const numbers = [1, 2, 3, 4, 5];

let newNumbers = numbers.map(function(number) {
  return number * number;
});
console.log(newNumbers.join(', '));

// Note removing of `function` keyword
newNumbers = numbers.map((number) => {
  return number * number;
});
console.log(newNumbers.join(', '));

// Note removing of `return` keyword
newNumbers = numbers.map(number => number * number);
console.log(newNumbers.join(', '));