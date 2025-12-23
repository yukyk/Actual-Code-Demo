const { DataTypes } = require('sequelize');
const sequelize = require('../utils/util');

const Booking = sequelize.define('Booking', {
  seatNumber: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
},
{
    
    timestamps: true
    
}

);

module.exports = Booking;
