export interface IUser {
  userId?: number;
  name: string;
  email: string;
  password: string;
  role: string;
  privileges: object;
}
