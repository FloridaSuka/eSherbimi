'use strict';
module.exports = (sequelize, DataTypes) => {
  const FamilyDoctorSelection = sequelize.define('FamilyDoctorSelection', {
    requestType: DataTypes.STRING,
    healthInstitution: DataTypes.STRING,
    familyDoctor: DataTypes.STRING,
    approved: DataTypes.BOOLEAN
  }, {});
  return FamilyDoctorSelection;
};
