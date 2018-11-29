import {NO_CONTENT, NOT_FOUND, BAD_REQUEST} from 'http-status-codes';
import {Request, Response} from 'express';
import {Datastore} from './db';

export function deleteSingle(req: Request, res: Response): void {
  const id = parseInt(req.params.id);
  if (id) {
    const store = <Datastore>req.app.locals;
    const customerToDelete = store.customers.get(id);
    if (customerToDelete) {
      store.customers.remove(customerToDelete);
      res.status(NO_CONTENT).send();
    } else {
      res.status(NOT_FOUND).send();
    }
  } else {
    res.status(BAD_REQUEST).send('Parameter id must be a number');
  }
}