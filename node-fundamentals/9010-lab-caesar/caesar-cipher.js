const console = require('console');
const readline = require('readline');

function handleArgumentError() {
  console.error('Invalid arguments, usage: node caesar-cipher.js [-e | -d] -k key');
  process.exit(-1);
}

function parseArguments() {
  const result = {};
  for (let i = 2; i < process.argv.length; i++) {
    switch (process.argv[i]) {
      case '-e':
        if (result.operation) {
          handleArgumentError();
        }
        result.operation = 1;
        break;
      case '-d':
        if (result.operation) {
          handleArgumentError();
        }
        result.operation = -1;
        break;
      case '-k':
        if (i === process.argv.length - 1) {
          handleArgumentError();
        } else {
          result.key = parseInt(process.argv[i + 1]);
          if (!result.key || result.key < 1 || result.key > 25) {
            handleArgumentError();
          } else {
            i++;
          }
        }
        break;
      default:
        handleArgumentError();
        break;
    }
  }

  if (!result.operation || !result.key) {
    handleArgumentError();
  }

  return result;
}

function transformCharacter(charCode, startAsciiCode, key) {
  var indexInAlphabet = charCode - startAsciiCode;
  var transformedCode = indexInAlphabet + key;

  if (transformedCode > 25) {
    transformedCode -= 26;
  } else if (transformedCode < 0) {
    transformedCode += 26;
  }

  return startAsciiCode + transformedCode;
}

const charCodeLowerA = 'a'.charCodeAt(0);
const charCodeLowerZ = 'z'.charCodeAt(0);
const charCodeUpperA = 'A'.charCodeAt(0);
const charCodeUpperZ = 'Z'.charCodeAt(0);

function transformText(input, options) {
  var result = '';

  for (var i = 0; i < input.length; i++) {
    var charCode = input.charCodeAt(i);

    if (charCode >= charCodeUpperA && charCode <= charCodeUpperZ) {
      charCode = transformCharacter(charCode, charCodeUpperA, options.key * options.operation);
    } else if (charCode >= charCodeLowerA && charCode <= charCodeLowerZ) {
      charCode = transformCharacter(charCode, charCodeLowerA, options.key * options.operation);
    }

    result += String.fromCharCode(charCode);
  }

  return result;
}

const options = parseArguments();
const rl = readline.createInterface({input: process.stdin, output: process.stdout});
rl.on('line', (line) => console.log(transformText(line, options)));
