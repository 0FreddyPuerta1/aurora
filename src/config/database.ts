import { Sequelize } from "sequelize-typescript";

const sequelize = new Sequelize({
  database: process.env.DATABASE_NAME,
  dialect: "mysql",
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  host: process.env.DATABASE_HOST,
});

export default sequelize;
