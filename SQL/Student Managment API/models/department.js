const { DataTypes } = require('sequelize');
const sequelize = require('../Utils/util');

const Department = sequelize.define('department', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Department; // ✅ IMPORTANT