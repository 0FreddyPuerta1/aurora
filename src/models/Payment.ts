import { Model, Table, Column, DataType } from 'sequelize-typescript';
import { IPayment } from '../interfaces/payment.interface';

@Table({
  timestamps: true,
  tableName: 'Payments',
})
export class Payment extends Model<IPayment> {
  @Column({ type: DataType.DATE, allowNull: false }) date!: Date;

  @Column({ type: DataType.DOUBLE, allowNull: false }) amount!: number;

  @Column({ type: DataType.STRING, allowNull: true }) method!: string;

  @Column({ type: DataType.INTEGER, allowNull: true }) invoiceId!: number;
}
