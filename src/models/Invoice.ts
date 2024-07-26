import { Model, Table, Column, DataType } from 'sequelize-typescript';
import { IInvoice } from '../interfaces/invoice.interface';

@Table({
  timestamps: true,
  tableName: 'Invoices',
})
export class Invoice extends Model<IInvoice> {
  @Column({ type: DataType.INTEGER, allowNull: false }) orderId!: number;

  @Column({ type: DataType.DATE, allowNull: false }) date!: Date;

  @Column({ type: DataType.DOUBLE, allowNull: false }) totalAmount!: number;

  @Column({ type: DataType.DOUBLE, allowNull: false }) tax!: number;

  @Column({ type: DataType.INTEGER, allowNull: false }) paymentId!: number;
}
