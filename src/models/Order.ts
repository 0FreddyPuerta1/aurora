import { Model, Table, Column, DataType } from 'sequelize-typescript';
import { IOrder } from '../interfaces/order.interface';

@Table({
  timestamps: true,
  tableName: 'Orders',
})
export class Order extends Model<IOrder> {
  @Column({ type: DataType.DATE, allowNull: false }) date!: Date;

  @Column({ type: DataType.INTEGER, allowNull: false }) customerId!: number;

  @Column({ type: DataType.DOUBLE, allowNull: false }) totalAmount!: number;
}
