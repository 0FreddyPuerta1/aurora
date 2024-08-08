import { ConnectionError } from '../errors/ConnectionError';
import { ICustomer } from '../interfaces/customer.interface';
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

  async createNewCustomer(
    customerData: ICustomer
  ): Promise<Customer | undefined> {
    try {
      const customer = await Customer.create(customerData);
      return customer;
    } catch (error) {
      if (error instanceof ConnectionError)
        throw new ConnectionError(error.message);
    }
  }
}
