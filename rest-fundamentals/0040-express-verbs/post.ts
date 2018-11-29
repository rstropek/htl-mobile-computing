import {CREATED, BAD_REQUEST} from 'http-status-codes';
import {Request, Response} from 'express';
import {customers, ICustomer} from './data';

export function post(req: Request, res: Response): void {
  if (!req.body.id || !req.body.firstName || !req.body.lastName) {
    res.status(BAD_REQUEST).send('Missing mandatory member(s)');
  } else {
    const newCustomerId = parseInt(req.body.id);
    if (!newCustomerId) {
      res.status(BAD_REQUEST).send('ID has to be a numeric value');
    } else {
      const newCustomer: ICustomer = { id: newCustomerId,
        firstName: req.body.firstName, lastName: req.body.lastName };
      customers.push(newCustomer);
      res.status(CREATED).header({Location: `${req.path}/${req.body.id}`}).send(newCustomer);
    }
  }
}