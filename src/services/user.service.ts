import { ConnectionError } from "../errors/ConnectionError";
import { IUser } from "../interfaces/user.interface";
import { User } from "../models/User";

export class userService {
  async registerUser(userData: IUser): Promise<User | undefined> {
    try {
      const user = await User.create(userData);
      return user;
    } catch (error) {
      if (error instanceof ConnectionError) {
        console.error("Error de conexión: ", error.message);
        throw new ConnectionError("No se pudo conectar a la base de datos.");
      }

      console.error("Error inesperado: ", error);
      throw new Error("Ocurrió un error inesperado.");
    }
  }
}
