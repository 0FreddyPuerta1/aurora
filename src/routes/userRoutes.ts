import { Router } from 'express';
import { userController } from '../controllers/user.controller';

const userControllers = new userController();

const router = Router();

router.post('/register', userControllers.registerUser);
router.post('/login', userControllers.loginUser);

export default router;
