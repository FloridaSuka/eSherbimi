module.exports = (sequelize, DataTypes) => {
  const ElectronicPassport = sequelize.define('ElectronicPassport', {
      request_type: DataTypes.STRING,
      health_institution: DataTypes.STRING,
      request_reason: DataTypes.STRING,
      family_doctor: DataTypes.STRING,
      consent: DataTypes.BOOLEAN,
  }, {
      timestamps: true
  });

  return ElectronicPassport;
};
