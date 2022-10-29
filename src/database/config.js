import Sequelize from 'sequelize';

export const sequelize = new Sequelize('bd_py', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});
