const jasmine = require('jasmine');
const cp = require('child_process');

const errorMessage = 'Invalid parameters\n';

describe('Converter', () => {
  describe('Negative tests', () => {
    it('recognizes too few arguments', done => {
      cp.exec('node convert.js 5 m to', (err, stdout) => {
        expect(stdout).toBe(errorMessage);
        done();
      });
    });

    it('recognizes invalid number', done => {
      cp.exec('node convert.js foo m to mm', (err, stdout) => {
        expect(stdout).toBe(errorMessage);
        done();
      });
    });

    it('recognizes unknown from-unit', done => {
      cp.exec('node convert.js 5 x to mm', (err, stdout) => {
        expect(stdout).toBe(errorMessage);
        done();
      });
    });

    it('recognizes unknown to-unit', done => {
      cp.exec('node convert.js 5 m to x', (err, stdout) => {
        expect(stdout).toBe(errorMessage);
        done();
      });
    });

    it('recognizes missing "to" constant', done => {
      cp.exec('node convert.js 5 m too mm', (err, stdout) => {
        expect(stdout).toBe(errorMessage);
        done();
      });
    });
  });

  describe('Positive tests', () => {
    it('can convert length', done => {
      cp.exec('node convert.js 5 m to cm', (err, stdout) => {
        expect(stdout).toBe('5 m are 500 cm\n');
        done();
      });
    });

    it('can convert weight', done => {
      cp.exec('node convert.js 5000 g to kg', (err, stdout) => {
        expect(stdout).toBe('5000 g are 5 kg\n');
        done();
      });
    });

    it('can convert floats', done => {
      cp.exec('node convert.js 5.5 kg to g', (err, stdout) => {
        expect(stdout).toBe('5.5 kg are 5500 g\n');
        done();
      });
    });

    it('can convert unit into itself', done => {
      cp.exec('node convert.js 5 m to m', (err, stdout) => {
        expect(stdout).toBe('5 m are 5 m\n');
        done();
      });
    });
  });
});