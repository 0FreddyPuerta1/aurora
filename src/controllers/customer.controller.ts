import { Request, Response } from 'express';
import { CustomerService } from '../services/customer.service';

const customerService = new CustomerService();

export class CustomerController {
  async getAllCustomers(req: Request, res: Response) {
    const customers = await customerService.getAllCustomers();
    if (customers) {
      res.status(200).json(customers);
    }
  }
}
