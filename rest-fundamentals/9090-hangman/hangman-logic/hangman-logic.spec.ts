import 'jasmine';
import {HangmanLogic} from './hangman-logic';

describe('Hangman Logic', () => {
  it('detects invalid guess', () => {
    const hml = new HangmanLogic();
    expect(() => hml.guess(''))
        .toThrowError('A guess must consist of one letter');
    expect(() => hml.guess('aa'))
        .toThrowError('A guess must consist of one letter');
  });

  it('chooses random word', () => {
    const hml = new HangmanLogic();
    expect((<any>hml).wordToGuess.length).toBeGreaterThan(0);
    expect(hml.word.length).toBeGreaterThan(0);
  });

  it('sets word dots', () => {
    const hml = new HangmanLogic('demo');
    expect(hml.word).toBe('....');
  });

  it('accepts correct guess', () => {
    const hml = new HangmanLogic('demomo');
    let numberOfGuessedLetters = hml.guess('d');
    expect(hml.word).toBe('d.....');
    expect(numberOfGuessedLetters).toBe(1);
    numberOfGuessedLetters = hml.guess('m');
    expect(hml.word).toBe('d.m.m.');
    expect(numberOfGuessedLetters).toBe(2);
    numberOfGuessedLetters = hml.guess('o');
  });

  it('recognized incorrect guess', () => {
    const hml = new HangmanLogic('demo');
    let numberOfGuessedLetters = hml.guess('x');
    expect(hml.word).toBe('....');
    expect(numberOfGuessedLetters).toBe(0);
  });
});