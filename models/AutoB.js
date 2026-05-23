'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class AutoB extends Model {
    static associate(models) {
      // define association here
    }
  }
  AutoB.init({
    autoType: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ownerType: {
      type: DataTypes.STRING,
      allowNull: false
    },
    englishRegistration: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    mathsRegistration: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    personalNumber: {
      type: DataTypes.STRING,
      allowNull: false
    },
    registrationType: {
      type: DataTypes.STRING,
      allowNull: false
    },
    municipality: {
      type: DataTypes.STRING,
      allowNull: false
    },
    marka: {
      type: DataTypes.STRING,
      allowNull: false
    },
    engineCapacity: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'AutoB',
    tableName: 'autobs',
    timestamps: true,
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  });
  return AutoB;
};
