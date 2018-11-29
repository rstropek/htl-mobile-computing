import {Request, Response} from 'express';
import {Datastore} from './db';

export function getAll(req: Request, res: Response): void {
    res.send((<Datastore>req.app.locals).customers.find());
}