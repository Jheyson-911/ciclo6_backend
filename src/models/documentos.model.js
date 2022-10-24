import { sequelize } from "../database/config.js";
import { DataTypes } from "sequelize"

export const Documentos = sequelize.define('Documentos',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    carata_aceptacion:{
        type: DataTypes.STRING,
    }
})