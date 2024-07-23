import bcrypt from 'bcrypt';
import jwt, { Secret } from 'jsonwebtoken';
import 'dotenv/config';
import { ConnectionError } from '../errors/ConnectionError';
import { NotFoundError } from '../errors/NotFoundError';
import { ILogin } from '../interfaces/loginform.interface';
import { IUser } from '../interfaces/user.interface';
import { User } from '../models/User';
export class userService {
  async registerUser(userData: IUser): Promise<User | undefined> {
    try {
      const user = await User.create(userData);
      return user;
    } catch (error) {
      if (error instanceof ConnectionError) {
        console.error('Error de conexión: ', error.message);
        throw new ConnectionError('No se pudo conectar a la base de datos.');
      }

      console.error('Error inesperado: ', error);
      throw new Error('Ocurrió un error inesperado.');
    }
  }

  async loginUser(
    loginForm: ILogin
  ): Promise<{ user: User; token: string } | undefined> {
    try {
      const user = await User.findOne({
        where: { email: loginForm.email },
      });
      if (!user) {
        throw new NotFoundError('Usuario no registra en la base de datos');
      }
      const isPasswordValid = await bcrypt.compare(
        loginForm.password,
        user.password
      );
      if (!isPasswordValid) {
        throw new NotFoundError('Email o contraseña incorrectos');
      }
      const SECRET_KEY: Secret = process.env.SECRET_KEY || '';
      const token = jwt.sign({ userId: user.id, name: user.name }, SECRET_KEY, {
        expiresIn: '2 days',
      });

      return { user: user, token: token };
    } catch (error) {
      if (error instanceof ConnectionError) {
        throw new ConnectionError('Error de conexion con la base de datos');
      }
    }
  }
}
