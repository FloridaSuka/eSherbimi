'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class FaturaPer extends Model {
    static associate(models) {
      // define association here if needed
    }
  }
  FaturaPer.init({
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    nrPersonal: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'FaturaPer',
    tableName: 'fatura_pers',
    timestamps: true,
  });
  return FaturaPer;
};
