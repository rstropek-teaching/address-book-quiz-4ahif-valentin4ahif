export interface ICustomer {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

export const customers: ICustomer[] = [
  { id: 1, firstName: 'Donald', lastName: 'Duck', email: 'duck.donald@mail.at' },
  { id: 2, firstName: 'Mickey', lastName: 'Mouse', email: 'mickeythemouse@mail.at' },
  { id: 3, firstName: 'Minnie', lastName: 'Mouse', email: 'minnie.m@mail.at' },
  { id: 4, firstName: 'Scrooge', lastName: 'McDuck', email: 'scrooge.mcduck@mail.at' }
];