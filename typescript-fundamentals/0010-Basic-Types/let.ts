function printSquare(sideLength: number) {
    for (let i = 0; i < sideLength; i++) {
        let line = '';
        //let line = 'dummy';
        for (let i = 0; i < sideLength; i++) {
            line += '*';
        }

        console.log(line);
    }
}
printSquare(3);
