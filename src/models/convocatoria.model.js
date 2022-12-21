import { DataTypes } from 'sequelize';
import { sequelize } from '../database/config.js';

export const Convocatoria = sequelize.define(
  'Convocatoria',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    descripcion: {
      type: DataTypes.STRING
    },
    cupos: {
      type: DataTypes.INTEGER
    },
    cargo: {
      type: DataTypes.STRING
    },
    tiempo: {
      type: DataTypes.STRING
    },
    lugar: {
      type: DataTypes.STRING
    },
    fecha_limite: {
      type: DataTypes.STRING
    },
    telefono: {
      type: DataTypes.STRING
    }

  },
  {
    freezeTableName: true
  }
);
