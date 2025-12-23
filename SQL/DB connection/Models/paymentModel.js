const { DataTypes } = require('sequelize');
const sequelize = require('../utils/util');

const Payment = sequelize.define(
    'Payment', 
    {
  amountPaid: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  paymentStatus: {
    type: DataTypes.STRING,
    allowNull: false
  }
},
    {
    timestamps: true
    }
);

module.exports = Payment;
