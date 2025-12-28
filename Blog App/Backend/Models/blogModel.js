const {Sequelize,DataTypes} = require('sequelize');
const sequelize = require('../Utils/util');


const Blog = sequelize.define(
    'Blog',{
        id:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true
        },
        title:{
            type:DataTypes.STRING,
            allowNull:false
        },
        name:{
            type:DataTypes.STRING,
            allowNull:false
        },
        description:{
            type:DataTypes.STRING,
            allowNull:false,
        },
    },
    {
        tableName:'Blogs',
        timestamps:false
    }
);



module.exports = Blog;