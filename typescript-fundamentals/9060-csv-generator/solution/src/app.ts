import * as fs from 'fs';

let high = false;
let rows = 1000;

for (let i = 2; i < process.argv.length; i++) {
  const arg = process.argv[i];
  if (arg.match(/^-n=\d+$/)) {
    rows = parseInt(arg.substr(3));
    if (rows <= 0 || rows >= 10000) {
      console.error('Number of lines has to be > 0 and < 10000');
      process.exit(-1);
    }
  } else if (arg === '-h') {
    high = true;
  } else if (arg !== '-l') {
    console.error('Usage: generate.js [-n=<number of line to generate>] [-h | -l]');
    process.exit(-1);
  }
}

const products = ['Apples', 'Bananas', 'Bikes', 'Cars', 'Flowers'];
const attributes = ['Juicy', 'Fresh', 'Tasty', 'Hot', 'Cheap'];

const stream = fs.createWriteStream('generated-sales.csv');
stream.write('id,customerid,product,revenue\n');
for (var i = 0; i < rows; i++) {
  stream.write(`${i + 1},${Math.round(Math.random() * 1000 % 250 + 1)},${
    attributes[Math.floor(Math.random()*10) % attributes.length]} ${
    products[Math.floor(Math.random()*10) % products.length]},${
    Math.round(Math.random() * (high ? 1000 : 10))}\n`);
}

stream.on('error', err => console.error(err));

stream.end(() => console.log('Document generated'));
