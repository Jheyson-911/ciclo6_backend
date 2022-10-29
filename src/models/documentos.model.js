import { DataTypes } from 'sequelize';
import { sequelize } from '../database/config.js';

export const Documentos = sequelize.define('Documentos', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  carata_aceptacion: {
    type: DataTypes.STRING
  }
});
