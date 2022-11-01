import { DataTypes } from 'sequelize';
import { sequelize } from '../database/config.js';

export const Documentos = sequelize.define('Documentos', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  carta_presentacion: {
    type: DataTypes.STRING
  },
  carta_aceptacion: {
    type: DataTypes.STRING
  },
  plan_ppp: {
    type: DataTypes.STRING
  },
  constancia: {
    type: DataTypes.STRING
  },
  informe_ppp: {
    type: DataTypes.STRING
  }
});
