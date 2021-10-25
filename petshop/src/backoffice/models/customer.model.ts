import { Pet } from './pet.model';

export class Customer {
  /**
   *
   */
  constructor(
    public name: string,
    public document: string,
    public email: string,
    public pets: Pet[],
    public password: string,
    public active: boolean,
  ) {}
}
