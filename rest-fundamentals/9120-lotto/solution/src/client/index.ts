async function checkResult() {
    const numbers = [1, 2, 3, 4, 5, 6]
        .map(n => `number${n}`)
        .map(id => <HTMLInputElement>document.getElementById(id))
        .map(i => parseInt(i.value));

    const response = await fetch('/api/calculateResult', { method: 'POST', body: JSON.stringify(numbers), headers: { 'Content-Type': 'application/json'} });
    const result = await response.json();

    document.getElementById('won').hidden = !result.isWin;
    document.getElementById('lost').hidden = result.isWin;

    document.getElementById('correctTips').innerHTML = result.correctNumbers.toString();
    document.getElementById('zusatzzahl-nicht').hidden = result.zusatzzahl;
    document.getElementById('result').hidden = false;
}
