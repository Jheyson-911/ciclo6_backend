import { DataTypes } from 'sequelize';
import { sequelize } from '../database/config.js';

export const User = sequelize.define(
  'User',
  {
    id: {
      // type: DataTypes.UUID,
      // defaultValue: DataTypes.UUIDV4,
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING
    },
    rol: {
      type: DataTypes.STRING
    },
    estado: {
      type: DataTypes.STRING
    }
  },
  {
    freezeTableName: true
  }
);
