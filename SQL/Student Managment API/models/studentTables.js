const {Sequelize, DataTypes} = require('sequelize');
const sequelize = require('../Utils/util');

const Studentss = sequelize.define('studentss',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false
    }
})
 
module.exports = Studentss;