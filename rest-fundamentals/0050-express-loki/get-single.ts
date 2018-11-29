import {Request, Response} from 'express';
import {NOT_FOUND, BAD_REQUEST} from 'http-status-codes';
import {Datastore} from './db';

export function getSingle(req: Request, res: Response): void {
  const id = parseInt(req.params.id);
  if (id) {
    const store = <Datastore>req.app.locals;
    const customer = store.customers.get(id);
    if (customer) {
      res.send(customer);
    } else {
      res.status(NOT_FOUND).send();
    }
  } else {
    res.status(BAD_REQUEST).send('Parameter id must be a number');
  }
}