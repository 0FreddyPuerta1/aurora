import { Request, Response } from 'express';
import { CustomerService } from '../services/customer.service';
import { ICustomer } from '../interfaces/customer.interface';

const customerService = new CustomerService();

export class CustomerController {
  async getAllCustomers(req: Request, res: Response) {
    const customers = await customerService.getAllCustomers();
    if (customers) {
      res.status(200).json(customers);
    }
  }

  async createNewCustomer(req: Request, res: Response) {
    const customerData: ICustomer = {
      name: req.body.name,
      idType: req.body.idType,
      idNumber: req.body.idNumber,
      address: req.body.address,
      phone: req.body.phone,
      email: req.body.email,
      contactPerson: req.body.contactPerson,
      postalCode: req.body.postalCode,
      city: req.body.city,
      country: req.body.country,
      loyaltyPoints: req.body.loyaltyPoints,
    };
    const missingFields = [];
    for (const [key, value] of Object.entries(customerData)) {
      if (value === null || value === '') {
        missingFields.push(key);
      }
    }
    if (missingFields.length > 0) {
      return res
        .status(400)
        .json({ message: 'Faltan campos obligatorios', missingFields });
    }
    try {
      const customer = await customerService.createNewCustomer(customerData);
      if (customer) {
        return res.status(201).json(customer);
      }
    } catch (error) {
      return res.status(500).json({ message: 'Error interno del servidor' });
    }
  }
}
