import { DataTypes } from 'sequelize';
import { sequelize } from '../database/config.js';

export const Evaluacion = sequelize.define(
  'Evaluacion',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    fase: {
      type: DataTypes.STRING
    },
    fecha: {
      type: DataTypes.DATE
    },
    calificacion: {
      type: DataTypes.STRING
    },
    observaciones: {
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
