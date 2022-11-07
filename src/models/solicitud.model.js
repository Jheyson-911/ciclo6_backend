import { DataTypes } from 'sequelize';
import { sequelize } from '../database/config.js';

export const Solicitud = sequelize.define(
  'Solicitud',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nombre_empresa: {
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
    representante: {
      type: DataTypes.STRING
    },
    cargo: {
      type: DataTypes.STRING
    },
    area: {
      type: DataTypes.STRING
    },
    descripcion: {
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
