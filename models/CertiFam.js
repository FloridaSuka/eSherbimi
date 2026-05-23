// models/CertiFam.js
'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CertiFam extends Model {
    static associate(models) {
      // define association here
    }
  }
  CertiFam.init({
    document_type: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'CertiFam',
    tableName: 'certifams',
    timestamps: true
  });
  return CertiFam;
};
