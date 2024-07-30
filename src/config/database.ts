import { Sequelize } from 'sequelize-typescript';
import { User } from '../models/User';
import { Product } from '../models/Product';
import { Customer } from '../models/Customer';

const sequelize = new Sequelize({
  database: process.env.DATABASE_NAME,
  dialect: 'mysql',
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  host: process.env.DATABASE_HOST,
  models: [User, Product, Customer],
});

export default sequelize;
