import { Model, Table, Column, DataType } from 'sequelize-typescript';
import { IInventory } from '../interfaces/inventory.interface';

@Table({
  timestamps: true,
  tableName: 'Inventory',
})
export class Inventory extends Model<IInventory> {
  @Column({ type: DataType.INTEGER, allowNull: false }) productId!: number;

  @Column({ type: DataType.DOUBLE, allowNull: false }) quantity!: number;
}
