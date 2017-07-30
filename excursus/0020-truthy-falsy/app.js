const x = false;
if (!x) console.log('x is falsy');

const y = 0;
if (!y) console.log('y is falsy');

const s1 = 'Hello World';
if (!s1) console.log('s1 is falsy');

const s2 = '';
if (!s2) console.log('s2 is falsy');

console.log(`This expression is ${!!!s2}`);