// If possible, don't use 'var' in your code anymore. 'let' protects
// you from unnecessary mistakes.
function printSquareWithMistake(sideLength: number) {
    for (var i = 0; i < sideLength; i++) {
        var line = 'dummy';
        var line = '';          // This is a mistake, but it works with 'var'

        // Note that 'i' is declared a second time. As 'var' variables
        // are function-scoped, this is a bug! 
        for (var i = 0; i < sideLength; i++) {
            line += '*';
        }

        console.log(line);
    }
}
printSquareWithMistake(3);
