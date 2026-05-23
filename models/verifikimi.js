'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Verifikimi extends Model {
    static associate(models) {
      // define association here
    }
  };
  Verifikimi.init({
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
    modelName: 'Verifikimi',
    timestamps: true,
  });
  return Verifikimi;
};
