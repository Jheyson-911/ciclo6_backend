import { DataTypes } from 'sequelize';
import { sequelize } from '../database/config.js';

export const Docente = sequelize.define(
  'Docente',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
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
    grado_academico: {
      type: DataTypes.STRING
    },
    area_encargada: {
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
    estado: {
      type: DataTypes.STRING
    }
  },
  {
    freezeTableName: true
  }
);
