import { sequelize } from "../database/config.js";
import { DataTypes } from "sequelize";

export const Estudiante = sequelize.define('Estudiante',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    codigo:{
        type:DataTypes.STRING,
    },
    estado_practicas:{
        type:DataTypes.STRING,
    }
},{
    freezeTableName: true,
})