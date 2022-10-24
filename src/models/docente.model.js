import { sequelize } from "../database/config.js";
import { DataTypes } from "sequelize";


export const Docente = sequelize.define('Docente',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    grado_acedemico:{
        type:DataTypes.STRING,
    },
    area_encargada:{
        type:DataTypes.STRING,
    },
    estado:{
        type:DataTypes.STRING,
    }
},
{
    freezeTableName: true
})