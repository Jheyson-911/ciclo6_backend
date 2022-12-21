import Sequelize from 'sequelize';

export const sequelize = new Sequelize('bd_py', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3309,
});
