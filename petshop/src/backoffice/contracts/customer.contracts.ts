import { Flunt } from 'src/utils/flunt';
import { Customer } from '../models/customer.model';
import { Contract } from './contract';

export class CreateCustomerContract implements Contract {
  errors: any[];

  validate(model: Customer): boolean {
    const flunt = new Flunt();

    flunt.hasMinLen(model.name, 5, 'Invalid name!');
    flunt.isEmail(model.email, 'Invalid email!');
    flunt.isFixedLen(model.document, 11, 'Invalid ID!');
    flunt.hasMinLen(model.password, 6, 'Invalid name!');

    this.errors = flunt.errors;

    return flunt.isValid();
  }
}
