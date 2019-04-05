import express = require('express');
import request = require('supertest');
import { getDrawing, postIsTipValid, postCalculateResult } from './handlers';
import { ILottoDrawing, ILottoResult } from './lotto-logic';
import { OK, BAD_REQUEST } from 'http-status-codes';

const app = express();
app.use(express.json());
app.get('/api/drawing', getDrawing);
app.post('/api/isTipValid', postIsTipValid);
app.post('/api/calculateResult', postCalculateResult);

describe('Handlers', () => {
    it('GET api/drawing', (done) => {
        request(app)
            .get('/api/drawing')
            .set('Accept', 'application/json')
            .expect(res => {
                const result: ILottoDrawing = res.body;
                expect(result).toBeTruthy();
                expect(result.winningNumbers).toBeTruthy();
                expect(result.zusatzzahl).toBeTruthy();
            })
            .expect(OK, done);
    });

    it('POST api/isTipValid valid', (done) => {
        request(app)
            .post('/api/isTipValid')
            .send([1, 2, 3, 4, 5, 6])
            .set('Accept', 'application/json')
            .expect(OK, done);
    });

    it('POST api/isTipValid invalid', (done) => {
        request(app)
            .post('/api/isTipValid')
            .send([1, 2, 3, 4, 5])
            .set('Accept', 'application/json')
            .expect(BAD_REQUEST, done);
    });

    it('POST api/calculateResult valid', (done) => {
        request(app)
            .post('/api/calculateResult')
            .send([1, 2, 3, 4, 5, 6])
            .set('Accept', 'application/json')
            .expect(res => {
                const result: ILottoResult = res.body;
                expect(result).toBeTruthy();
                expect(result.correctNumbers).toBeGreaterThanOrEqual(0);
                expect(result.correctNumbers).toBeLessThanOrEqual(6);
                expect(result.zusatzzahl === true || result.zusatzzahl === false).toBeTruthy();
                expect(result.isWin === true || result.isWin === false).toBeTruthy();
            })
            .expect(OK, done);
    });

    it('POST api/calculateResult invalid', (done) => {
        request(app)
            .post('/api/calculateResult')
            .send([1, 2, 3, 4, 5])
            .set('Accept', 'application/json')
            .expect(BAD_REQUEST, done);
    });
});
