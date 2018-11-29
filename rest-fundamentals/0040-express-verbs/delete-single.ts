import {NO_CONTENT, NOT_FOUND, BAD_REQUEST} from 'http-status-codes';
import {Request, Response} from 'express';
import {customers} from './data';

export function deleteSingle(req: Request, res: Response): void {
  const id = parseInt(req.params.id);
  if (id) {
    const customerIndex = customers.findIndex(c => c.id === id);
    if (customerIndex !== (-1)) {
      customers.splice(customerIndex, 1);
      res.status(NO_CONTENT).send();
    } else {
      res.status(NOT_FOUND).send();
    }
  } else {
    res.status(BAD_REQUEST).send('Parameter id must be a number');
  }
}