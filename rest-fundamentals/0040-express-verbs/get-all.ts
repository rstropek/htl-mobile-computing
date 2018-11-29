import {Request, Response} from 'express';
import {customers} from './data';

export function getAll(req: Request, res: Response): void {
    res.send(customers);
}