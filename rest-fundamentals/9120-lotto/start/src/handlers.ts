import { Request, Response } from "express";
import { OK, BAD_REQUEST } from "http-status-codes";
import { getRandomLottoDrawing, isTipValid, calculateResult } from "./lotto-logic";

/** Return a random Lotto drawing generated with getRandomLottoDrawing in the response body */
export function getDrawing(req: Request, res: Response): void {
    // TODO: Implement this method appropriately
    throw new Error('Not implemented');
}

/** Read tip from request body, validate it with isTipValid, return OK if valid and BAD_REQUEST if invalid */
export function postIsTipValid(req: Request, res: Response): void {
    // TODO: Implement this method appropriately
    throw new Error('Not implemented');
}

/** Read tip from request body, calculate result with calculateResult, return OK and result in response body or BAD_REQUEST */
export function postCalculateResult(req: Request, res: Response): void {
    // TODO: Implement this method appropriately
    throw new Error('Not implemented');
}
