import { Router } from 'express';
import { CustomerController } from '../controllers/customer.controller';

const customerController = new CustomerController();
const router = Router();

router.get('/customers', customerController.getAllCustomers);

export default router;
