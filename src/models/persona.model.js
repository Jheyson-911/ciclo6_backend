import { sequelize } from "../database/config.js";
import { DataTypes } from "sequelize";


export const Persona = sequelize.define('Persona',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    nombres:{
        type:DataTypes.STRING,
    },
    ap_paterno:{
        type:DataTypes.STRING,
    },
    ap_materno:{
        type:DataTypes.STRING,
    },
    dni:{
        type:DataTypes.STRING,
    },
    edad:{
        type:DataTypes.STRING,
    },
    sexo:{
        type:DataTypes.STRING,
    },
    telefono:{
        type:DataTypes.STRING,
    },
    direccion:{
        type:DataTypes.STRING,
    }
},
{
    freezeTableName: true,
})