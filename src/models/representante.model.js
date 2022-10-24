import { DataTypes } from "sequelize";
import { sequelize } from "../database/config.js";


export const Representante = sequelize.define('Representante',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    nombre:{
        type: DataTypes.STRING
    },
    cargo:{
        type: DataTypes.STRING,
    },
    area:{
        type: DataTypes.STRING,
    }
},{
    freezeTableName: true
})