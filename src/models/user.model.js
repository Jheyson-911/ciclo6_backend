import { sequelize } from "../database/config.js";
import { DataTypes } from "sequelize";

export const User = sequelize.define('User',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    username:{
        type: DataTypes.STRING,
    },
    email:{
        type:DataTypes.STRING,
    },
    password:{
        type:DataTypes.STRING,
    },
    rol:{
        type:DataTypes.STRING,
    }
},{
    freezeTableName: true,
})