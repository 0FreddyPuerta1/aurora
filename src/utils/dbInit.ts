import sequelize from '../config/database';

const initializeDatabase = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ force: false });
    console.log('Database connection and synchronization successful');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

export default initializeDatabase;
