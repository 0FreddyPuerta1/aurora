import { NextFunction, Request, Response } from "express";
import { IUser } from "../interfaces/user.interface";
import { userService } from "../services/user.service";
import { ValidationError } from "../errors/ValidationError";

const userServices = new userService();
export class userController {
  async registerUser(req: Request, res: Response, next: NextFunction) {
    try {
      const { name, email, password, role, privileges } = req.body;
      if (!name || !email || !password || !role || !privileges) {
        throw new ValidationError("Todos los campos son obligatorios");
      }
      const userData: IUser = {
        name: name,
        email: email,
        password: password,
        role: role,
        privileges: privileges,
      };
      if (
        typeof userData.name !== "string" ||
        typeof userData.email !== "string" ||
        typeof userData.password !== "string" ||
        typeof userData.role !== "string" ||
        !Array.isArray(userData.privileges)
      ) {
        throw new ValidationError(
          "Los datos no corresponden a los tipos esperados"
        );
      }
      const user = await userServices.registerUser(userData);
      if (user) {
        res.status(201).json(user);
      }
    } catch (error) {
      if (error instanceof ValidationError) {
        return res.status(400).json({ message: error.message });
      }
      next();
    }
  }
}
