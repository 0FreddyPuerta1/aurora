import { Model, Column, DataType, Table } from 'sequelize-typescript';
import { IProduct } from '../interfaces/product.interface';

@Table({
  timestamps: true,
  tableName: 'products',
})
export class Product extends Model<IProduct> {
  @Column({ type: DataType.STRING, allowNull: false }) name!: string;

  @Column({ type: DataType.STRING, allowNull: false }) description!: string;

  @Column({ type: DataType.DOUBLE, allowNull: false }) price!: number;

  @Column({ type: DataType.STRING, allowNull: false }) unitType!: string;

  @Column({ type: DataType.DOUBLE, allowNull: false }) quantityInStock!: number;

  @Column({ type: DataType.INTEGER, allowNull: false }) providerId!: number;
}
