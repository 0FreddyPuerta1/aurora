import { ConnectionError } from '../errors/ConnectionError';
import { NotFoundError } from '../errors/NotFoundError';
import { ILogin } from '../interfaces/loginform.interface';
import { IUser } from '../interfaces/user.interface';
import { User } from '../models/User';
import bcrypt from 'bcrypt';
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

  async loginUser(loginForm: ILogin): Promise<User | undefined> {
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
      return user;
    } catch (error) {
      if (error instanceof ConnectionError) {
        throw new ConnectionError('Errror de conexion con la base de datos');
      }
    }
  }
}
