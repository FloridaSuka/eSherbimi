'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Payment extends Model {
    static associate(models) {
      // Define associations here
    }
  }

  Payment.init({
    cardHolderName: DataTypes.STRING,
    cardNumber: DataTypes.STRING,
    expiryDate: DataTypes.STRING,
    cvv: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Payment',
    timestamps: true,
  });

  return Payment;
};
