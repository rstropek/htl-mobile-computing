/** Represents the result of a Lotto drawing */
export interface ILottoDrawing {
    /** Six unique, winning numbers between 1 and 45 */
    winningNumbers: number[];

    /** Zusatzzahl between 1 and 45 (must not be contained in winning numbers) */
    zusatzzahl: number;
}

/**
 * Generates a random Lotto drawing result (pay attention to comments in ILottoDrawing)
 */
export function getRandomLottoDrawing(): ILottoDrawing {
    const result: Set<number> = new Set<number>();
    while(result.size < 7) {
        result.add(Math.floor(Math.random() * 45) + 1);
    }

    const winningNumbers = Array.from(result);
    const zusatzzahl = winningNumbers.splice(6, 1)[0];
    return {
        winningNumbers: winningNumbers,
        zusatzzahl: zusatzzahl
    };
}

/**
 * Checks whether guessed/drawn numbers are valid (six unique numbers between 1 and 45)
 */
export function isTipValid(guessedNumbers: number[]): boolean {
    return !!guessedNumbers && Array.isArray(guessedNumbers)
        && guessedNumbers.length === 6 && new Set(guessedNumbers).size === 6
        && guessedNumbers.filter(g => g < 1 || g > 45).length === 0;
}

/**
 * Checks whether given Lotto drawing is valid (pay attention to comments in ILottoDrawing)
 */
export function isDrawingValid(drawnNumbers: ILottoDrawing): boolean {
    return drawnNumbers && isTipValid(drawnNumbers.winningNumbers)
        && drawnNumbers.zusatzzahl && drawnNumbers.winningNumbers.filter(r => r === drawnNumbers.zusatzzahl).length === 0;
}

/** Represents the result of a Lotto tip */
export interface ILottoResult {
    /** Indicates whether guess has won (i.e. correct numbers >= 3 or only Zusatzzahl) */
    isWin: boolean;

    /** Number of guesses that are contained in winning numbers */
    correctNumbers: number;

    /** Indicator whether Zusatzzahl was guessed */
    zusatzzahl: boolean;
}

/**
 * Calculates the result of a Lotto guess
 * @param guessedNumbers Six guessed numbers between 1 and 45
 * @param drawnNumbers Result of the Lotto drawing
 * @returns Calculated result. Undefined if guessed or drawn numbers are invalid (see isTipValid and isDrawingValid)
 */
export function calculateResult(guessedNumbers: number[], drawnNumbers: ILottoDrawing): (ILottoResult | undefined) {
    if (!isTipValid(guessedNumbers) || !isDrawingValid(drawnNumbers)) {
        return undefined;
    }

    const correctNumbers = guessedNumbers.filter(g => drawnNumbers.winningNumbers.filter(d => d === g).length).length;
    const zusatzzahl = guessedNumbers.filter(g => g === drawnNumbers.zusatzzahl).length === 1;

    return {
        isWin: correctNumbers >= 3 || (correctNumbers === 0 && zusatzzahl),
        correctNumbers: correctNumbers,
        zusatzzahl: zusatzzahl
    };
}
