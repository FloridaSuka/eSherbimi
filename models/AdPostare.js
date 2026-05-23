'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class AdPostare extends Model {
    static associate(models) {
      // define association here if needed
    }
  }
  AdPostare.init({
    Komuna: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Vendbanimi: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Numri: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Rruga: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Kodi: {
      type: DataTypes.STRING,
      allowNull: false
    },
    selectedOption: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'AdPostare',
    tableName: 'adpostares',
    timestamps: true
  });

  return AdPostare;
};
