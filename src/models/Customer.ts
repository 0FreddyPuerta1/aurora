import { Model, Table, Column, DataType } from 'sequelize-typescript';
import { ICustomer } from '../interfaces/customer.interface';

@Table({
  timestamps: true,
  tableName: 'customers',
})
export class Customer extends Model<ICustomer> {
  @Column({ type: DataType.STRING, allowNull: false }) name!: string;

  @Column({ type: DataType.STRING, allowNull: false }) idType!: string;

  @Column({ type: DataType.STRING, allowNull: false }) idNumber!: string;

  @Column({ type: DataType.STRING, allowNull: false }) address!: string;

  @Column({ type: DataType.STRING, allowNull: false }) phone!: string;

  @Column({ type: DataType.STRING, allowNull: false }) email!: string;

  @Column({ type: DataType.STRING, allowNull: false }) contactPerson!: string;

  @Column({ type: DataType.STRING, allowNull: false }) postalCode!: string;

  @Column({ type: DataType.STRING, allowNull: false }) city!: string;

  @Column({ type: DataType.STRING, allowNull: false }) country!: string;

  @Column({ type: DataType.INTEGER, allowNull: false }) loyaltyPoints!: number;
}
