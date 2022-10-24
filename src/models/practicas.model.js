import { sequelize } from "../database/config.js";
import { DataTypes } from "sequelize";

export const Practicas = sequelize.define('Practicas',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    f_inicion:{
        type:DataTypes.DATE,
    },
    f_fin:{
        type:DataTypes.DATE,
    },
    horas:{
        type:DataTypes.STRING,
    },
},
{
    freezeTableName: true,
})