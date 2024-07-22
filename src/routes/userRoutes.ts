import { Router } from "express";
import { userController } from "../controllers/user.controller";

const userControllers = new userController();

const router = Router();

router.post("/register", userControllers.registerUser);

export default router;
