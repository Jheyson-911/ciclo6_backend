import { DataTypes } from 'sequelize';
import { sequelize } from '../database/config.js';

export const Post = sequelize.define(
  'Post',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    titulo: {
      type: DataTypes.STRING
    },
    descripcion: {
      type: DataTypes.STRING
    }
  },
  {
    freezeTableName: true
  }
);
