import { DataTypes } from 'sequelize';
import { sequelize } from '../database/config.js';

export const Practicas = sequelize.define(
  'Practicas',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    f_inicio: {
      type: DataTypes.DATE
    },
    f_fin: {
      type: DataTypes.DATE
    },
    horas: {
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
