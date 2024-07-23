import { Router } from 'express';
import { UserController } from '../controllers/user.controller';

const userControllers = new UserController();

const router = Router();

router.post('/register', userControllers.registerUser);
router.post('/login', userControllers.loginUser);

export default router;
