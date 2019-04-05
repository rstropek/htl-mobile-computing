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
    // TODO: Implement this method appropriately
    throw new Error('Not implemented');
}

/**
 * Checks whether guessed/drawn numbers are valid (six unique numbers between 1 and 45)
 */
export function isTipValid(guessedNumbers: number[]): boolean {
    // TODO: Implement this method appropriately
    throw new Error('Not implemented');
}

/**
 * Checks whether given Lotto drawing is valid (pay attention to comments in ILottoDrawing)
 */
export function isDrawingValid(drawnNumbers: ILottoDrawing): boolean {
    // TODO: Implement this method appropriately
    throw new Error('Not implemented');
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
    // TODO: Implement this method appropriately
    throw new Error('Not implemented');
}
