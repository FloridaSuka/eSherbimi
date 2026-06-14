// models/ApLehonat.js
'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ApLehonat extends Model {
    static associate(models) {
      // define association here
    }
  }
  ApLehonat.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    nrPersonal: DataTypes.STRING,
    contact: DataTypes.STRING,
    adresa: DataTypes.STRING,
    nrXhiro: DataTypes.STRING,
    gender: DataTypes.STRING,
    isEmployed: DataTypes.BOOLEAN,
    aprovoj: DataTypes.BOOLEAN,
    english: DataTypes.BOOLEAN,
    maths: DataTypes.BOOLEAN,
    physics: DataTypes.BOOLEAN,
    nrFoshnjes: DataTypes.STRING,
    nationality: DataTypes.STRING,
    about: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'ApLehonat',
    tableName: 'ap_lehonat',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });
  return ApLehonat;
};
