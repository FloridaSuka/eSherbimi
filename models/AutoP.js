// models/AutoP.js
'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class AutoP extends Model {
    static associate(models) {
      // define association here
    }
  }
  AutoP.init({
    personalNumber: {
      type: DataTypes.STRING,
      allowNull: false
    },
    fullName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    registrationType: {
      type: DataTypes.STRING,
      allowNull: false
    },
    expirationDate: {
      type: DataTypes.STRING,
      allowNull: false
    },
    approved: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'AutoP',
    tableName: 'auto_ps',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });
  return AutoP;
};
