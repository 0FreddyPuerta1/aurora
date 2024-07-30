import { ConnectionError } from '../errors/ConnectionError';
import { Customer } from '../models/Customer';

export class CustomerService {
  async getAllCustomers(): Promise<Customer[] | undefined> {
    try {
      const customers = await Customer.findAll();
      return customers;
    } catch (error) {
      if (error instanceof ConnectionError)
        throw new ConnectionError(error.message);
    }
  }
}
