// Different types to declare functions
function add(x: number, y: number) { x + y };
const addLambdaWithoutTypes = (x, y) => x + y;

// Note that addLambdaWithoutTypes uses 'any'
const addLambda: (x: number, y: number) => number = (x: number, y: number) => x + y;
const addLambdaShorter: (x: number, y: number) => number =
    (x, y) => x + y; // Note that 'x' and 'y' are 'number' because of type inference.

// Optional and default parameters
function greetWithOptional(name: string, greeting?: string) {
    console.log(`${greeting || 'Hello'} ${name}!`);
};
greetWithOptional('John');

function greetWithDefault(name: string, greeting = 'Hello') {
    console.log(`${greeting} ${name}!`);
};
greetWithDefault('John');
