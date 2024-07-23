import {
  Model,
  Column,
  DataType,
  Table,
  BeforeCreate,
  BeforeUpdate,
  AfterFind,
} from 'sequelize-typescript';
import { IUser } from '../interfaces/user.interface';
import bcrypt from 'bcrypt';

@Table({
  timestamps: true,
  tableName: 'users',
})
export class User extends Model<IUser> implements IUser {
  @Column({ type: DataType.STRING, allowNull: false }) name!: string;

  @Column({ type: DataType.STRING, allowNull: false, unique: true })
  email!: string;

  @Column({ type: DataType.STRING, allowNull: false }) password!: string;

  @Column({ type: DataType.STRING, allowNull: false }) role!: string;

  @Column({
    type: DataType.JSON,
    allowNull: false,
  })
  privileges!: object;

  @BeforeCreate
  @BeforeUpdate
  @AfterFind
  static async hashPassword(instance: User) {
    if (instance.changed('password')) {
      const salt = await bcrypt.genSalt(10);
      instance.password = await bcrypt.hash(instance.password, salt);
    }
  }
}
