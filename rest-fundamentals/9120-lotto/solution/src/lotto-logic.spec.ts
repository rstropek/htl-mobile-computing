import { getRandomLottoDrawing, isTipValid, isDrawingValid, calculateResult } from './lotto-logic';

describe('Lotto logic', () => {
    describe('getRandomLottoDrawing', () => {
        it('generates 6 numbers and a zusatzzahl', () => {
            const result = getRandomLottoDrawing();
            expect(result).toBeTruthy();
            expect(result.winningNumbers).toBeTruthy();
            expect(Array.isArray(result.winningNumbers)).toBeTruthy();
            expect(result.winningNumbers.filter(r => !!r).length).toBe(6);
            expect(result.zusatzzahl).toBeTruthy();
        });

        it('numbers are between 1 and 45', () => {
            const result = getRandomLottoDrawing();
            expect(result.winningNumbers.filter(r => r >= 1 && r <= 45).length).toBe(6);
            expect(result.zusatzzahl).toBeGreaterThanOrEqual(1);
            expect(result.zusatzzahl).toBeLessThanOrEqual(45);
        });

        it('does not contain duplicate numbers', () => {
            for(let i = 0; i < 10000; i++) {
                const result = getRandomLottoDrawing();
                if (result.winningNumbers.filter(r => result.winningNumbers.filter(s => r === s).length === 1).length !== 6) {
                    fail(`Drawing ${result.winningNumbers} contains duplicates or a wrong number of results`);
                    break;
                }

                if (result.winningNumbers.filter(r => r === result.zusatzzahl).length !== 0) {
                    fail(`Zusatzzahl ${result.zusatzzahl} is in winning numbers ${result.winningNumbers}`);
                    break;
                }
            }
        });
    });

    describe('isTipValid', () => {
        it('recognizes falsy parameter', () => {
            expect(isTipValid(undefined)).toBeFalsy();
        });

        it('recognizes wrong number of guesses', () => {
            expect(isTipValid([1])).toBeFalsy();
        });

        it('recognizes duplicate guess', () => {
            expect(isTipValid([1, 2, 3, 4, 5, 5])).toBeFalsy();
        });

        it('recognizes invalid number', () => {
            expect(isTipValid([1, 2, 3, 4, 5, 99])).toBeFalsy();
        });

        it('recognizes correct guess', () => {
            expect(isTipValid([1, 2, 3, 4, 5, 6])).toBeTruthy();
        });
    });

    const drawingWithDuplicateNumber = { winningNumbers: [1, 2, 3, 4, 5, 5], zusatzzahl: 7 };
    const drawingWithWrongNumberOfDrawings = { winningNumbers: [1, 2, 3, 4, 5], zusatzzahl: 7 };
    const drawingWithMissingZusatzzahl = { winningNumbers: [1, 2, 3, 4, 5, 6], zusatzzahl: undefined };
    const drawingWithDuplicateZusatzzahl = { winningNumbers: [1, 2, 3, 4, 5, 6], zusatzzahl: 6 };
    describe('isDrawingValid', () => {
        it('recognizes duplicate drawn number', () => {
            expect(isDrawingValid(drawingWithDuplicateNumber)).toBeFalsy();
        });

        it('recognizes wrong number of drawn numbers', () => {
            expect(isDrawingValid(drawingWithWrongNumberOfDrawings)).toBeFalsy();
        });

        it('recognizes missing Zusatzzahl', () => {
            expect(isDrawingValid(drawingWithMissingZusatzzahl)).toBeFalsy();
        });

        it('recognizes duplicate Zusatzzahl', () => {
            expect(isDrawingValid(drawingWithDuplicateZusatzzahl)).toBeFalsy();
        });
    });

    describe('calculateResult', () => {
        it('recognizes undefined guessed numbers', () => {
            expect(calculateResult(undefined, { winningNumbers: [1, 2, 3, 4, 5, 6], zusatzzahl: 7 })).toBeUndefined();
        });

        it('recognizes undefined drawn numbers', () => {
            expect(calculateResult([1, 2, 3, 4, 5, 6], undefined)).toBeUndefined();
        });

        it('recognizes duplicate guessed number', () => {
            expect(calculateResult([1, 2, 3, 4, 5, 5],
                { winningNumbers: [1, 2, 3, 4, 5, 6], zusatzzahl: 7 })).toBeUndefined();
        });

        it('recognizes wrong number of guesses', () => {
            expect(calculateResult([1, 2, 3, 4, 5],
                { winningNumbers: [1, 2, 3, 4, 5, 6], zusatzzahl: 7 })).toBeUndefined();
        });

        it('recognizes duplicate drawn number', () => {
            expect(calculateResult([1, 2, 3, 4, 5, 6], drawingWithDuplicateNumber)).toBeUndefined();
        });

        it('recognizes wrong number of drawn numbers', () => {
            expect(calculateResult([1, 2, 3, 4, 5, 6], drawingWithWrongNumberOfDrawings)).toBeUndefined();
        });

        it('recognizes missing Zusatzzahl', () => {
            expect(calculateResult([1, 2, 3, 4, 5, 6], drawingWithMissingZusatzzahl)).toBeUndefined();
        });

        it('recognizes duplicate Zusatzzahl', () => {
            expect(calculateResult([1, 2, 3, 4, 5, 6], drawingWithDuplicateZusatzzahl)).toBeUndefined();
        });

        it('recognizes no win', () => {
            const result = calculateResult([1, 2, 3, 4, 5, 6], { winningNumbers: [5, 6, 7, 8, 9, 10], zusatzzahl: 4 });
            expect(result.isWin).toBe(false);
            expect(result.correctNumbers).toBe(2);
            expect(result.zusatzzahl).toBe(true);
        });

        it('recognizes win', () => {
            const result = calculateResult([1, 2, 3, 4, 5, 6], { winningNumbers: [4, 5, 6, 7, 8, 9], zusatzzahl: 10 });
            expect(result.isWin).toBe(true);
            expect(result.correctNumbers).toBe(3);
            expect(result.zusatzzahl).toBe(false);
        });

        it('recognizes win with Zusatzzahl', () => {
            const result = calculateResult([1, 2, 3, 4, 5, 6], { winningNumbers: [4, 5, 6, 7, 8, 9], zusatzzahl: 3 });
            expect(result.isWin).toBe(true);
            expect(result.correctNumbers).toBe(3);
            expect(result.zusatzzahl).toBe(true);
        });
    });
});