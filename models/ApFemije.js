// models/ApFemije.js
'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ApFemije extends Model {
    static associate(models) {
      // define association here if any
    }
  }
  ApFemije.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    nrPersonal: DataTypes.STRING,
    contact: DataTypes.STRING,
    adresa: DataTypes.STRING,
    nrXhiro: DataTypes.STRING,
    gender: DataTypes.STRING,
    aprovoj: DataTypes.BOOLEAN,
    che: DataTypes.STRING, // Changed to STRING
    resume: DataTypes.STRING,
    url: DataTypes.STRING,
    selectedOption: DataTypes.STRING,
    about: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'ApFemije',
    tableName: 'ap_femije',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });
  return ApFemije;
};
