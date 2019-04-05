export interface ILottoResult {
    isWin: boolean;
    correctNumbers: number;
    zusatzzahl: boolean;
}

function checkResult() {
    const numbers = [1, 2, 3, 4, 5, 6]
        .map(n => `number${n}`)
        .map(id => <HTMLInputElement>document.getElementById(id))
        .map(i => parseInt(i.value));

    // 'numbers' now contains an array of numbers with the guessed numbers

    let result: ILottoResult;

    // TODO: Send a HTTP POST to /api/calculateResult to check the results or your tip and store the
    //       result in a variable named 'result'. Use any framework/function you like for sending
    //       the HTTP request (e.g. fetch, jQuery, etc.).
    throw new Error('Not implemented');

    document.getElementById('won').hidden = !result.isWin;
    document.getElementById('lost').hidden = result.isWin;

    document.getElementById('correctTips').innerHTML = result.correctNumbers.toString();
    document.getElementById('zusatzzahl-nicht').hidden = result.zusatzzahl;
    document.getElementById('result').hidden = false;
}
