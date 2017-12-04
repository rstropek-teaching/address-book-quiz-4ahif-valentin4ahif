import { Next, Request, Response } from 'restify';
import { BadRequestError, NotFoundError } from 'restify-errors';
import { customers } from './data';

export function deleteSingle(req: Request, res: Response, next: Next): void {
  const id = parseInt(req.params.id);
  if (id) {
    const customerIndex = customers.findIndex(c => c.id === id);
    if (customerIndex !== (-1)) {
      customers.splice(customerIndex, 1);
      res.send('Successful operation');
      next();
    } else {
      next(new NotFoundError("Person not found"));
    }
  } else {
    next(new BadRequestError('Invalid ID supplied'));
  }
}