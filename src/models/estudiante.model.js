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
    nombres: {
      type: DataTypes.STRING
    },
    ap_paterno: {
      type: DataTypes.STRING
    },
    ap_materno: {
      type: DataTypes.STRING
    },
    dni: {
      type: DataTypes.STRING
    },
    edad: {
      type: DataTypes.STRING
    },
    sexo: {
      type: DataTypes.STRING
    },
    telefono: {
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
