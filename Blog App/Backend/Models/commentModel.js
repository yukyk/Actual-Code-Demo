const {DataTypes} = require('sequelize');
const sequelize = require('../Utils/util');
const Blog = require('./blogModel');

const Comment = sequelize.define('Comment', {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    content:{
        type: DataTypes.STRING,
        allowNull: false
    }
});


Blog.hasMany(Comment,{onDelete: 'CASCADE'});
Comment.belongsTo(Blog);

module.exports = Comment;