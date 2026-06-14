// models/Projektet.js
'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Projektet extends Model {
    static associate(models) {
      // Define associations here if necessary
    }
  }
  Projektet.init(
    {
      amount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
      },
      paymentMethod: {
        type: DataTypes.STRING,
        allowNull: true
      }
    },
    {
      sequelize,
      modelName: 'Projektet',
      tableName: 'projektet',
      timestamps: true,
      createdAt: 'createdAt',
      updatedAt: 'updatedAt'
    }
  );
  return Projektet;
};
