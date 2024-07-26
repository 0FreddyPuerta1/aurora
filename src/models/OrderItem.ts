import { Model, Table, Column, DataType } from 'sequelize-typescript';
import { IOrderItem } from '../interfaces/orderItem.interface';

@Table({
  timestamps: true,
  tableName: 'OrderItems',
})
export class OrderItems extends Model<IOrderItem> {
  @Column({ type: DataType.INTEGER, allowNull: false }) orderId!: number;

  @Column({ type: DataType.INTEGER, allowNull: false }) productId!: number;

  @Column({ type: DataType.INTEGER, allowNull: false }) quantity!: number;

  @Column({ type: DataType.DOUBLE, allowNull: false }) price!: number;
}
