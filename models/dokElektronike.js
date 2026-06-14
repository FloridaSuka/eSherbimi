'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class DokElektronike extends Model {
    static associate(models) {
      // define association here
    }
  }
  DokElektronike.init({
    ref: {
      type: DataTypes.STRING,
      allowNull: false
    },
    selectedOption: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'DokElektronike',
    timestamps: true,
  });
  return DokElektronike;
};
