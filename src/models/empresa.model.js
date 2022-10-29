import { DataTypes } from 'sequelize';
import { sequelize } from '../database/config.js';

export const Empresa = sequelize.define(
  'Empresa',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: {
      type: DataTypes.STRING
    },
    ruc: {
      type: DataTypes.STRING
    },
    actividad: {
      type: DataTypes.STRING
    },
    sector: {
      type: DataTypes.STRING
    },
    direccion: {
      type: DataTypes.STRING
    },
    convenio: {
      type: DataTypes.STRING
    }
  },
  {
    freezeTableName: true
  }
);
