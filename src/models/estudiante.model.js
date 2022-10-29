import { DataTypes } from 'sequelize';
import { sequelize } from '../database/config.js';

export const Estudiante = sequelize.define(
  'Estudiante',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    codigo: {
      type: DataTypes.STRING
    },
    estado_practicas: {
      type: DataTypes.STRING
    }
  },
  {
    freezeTableName: true
  }
);
