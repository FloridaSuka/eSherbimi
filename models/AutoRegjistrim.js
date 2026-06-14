'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class AutoRegjistrim extends Model {
    static associate(models) {
      // define association here
    }
  }
  AutoRegjistrim.init({
    autoTipi: {
      type: DataTypes.STRING,
      allowNull: false
    },
    regjistrimiRi: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    ndryshimiPronarit: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    komuna: {
      type: DataTypes.STRING,
      allowNull: false
    },
    marka: {
      type: DataTypes.STRING,
      allowNull: false
    },
    motorCcm: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'AutoRegjistrim',
    tableName: 'auto_regjistrim',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });
  return AutoRegjistrim;
};
