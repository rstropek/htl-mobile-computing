import { Request, Response } from "express";
import { OK, BAD_REQUEST } from "http-status-codes";
import { getRandomLottoDrawing, isTipValid, calculateResult } from "./lotto-logic";

// We do not have a real Lotto result, so let us generate a random one
const drawing = getRandomLottoDrawing();

/** Return a random Lotto drawing generated with getRandomLottoDrawing in the response body */
export function getDrawing(req: Request, res: Response): void {
    res.send(drawing);
}

/** Read tip from request body, validate it with isTipValid, return OK if valid and BAD_REQUEST if invalid */
export function postIsTipValid(req: Request, res: Response): void {
    const tip: number[] = req.body;
    if (isTipValid(tip)) {
        res.status(OK).send();
    } else {
        res.status(BAD_REQUEST).send();
    }
}

/** Read tip from request body, calculate result with calculateResult, return OK and result in response body or BAD_REQUEST */
export function postCalculateResult(req: Request, res: Response): void {
    const tip: number[] = req.body;
    const result = calculateResult(tip, drawing);
    if (result) {
        res.status(OK).send(result);
    } else {
        res.status(BAD_REQUEST).send();
    }
}
