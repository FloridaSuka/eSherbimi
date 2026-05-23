module.exports = (sequelize, DataTypes) => {
  const FamilyDoctorRequest = sequelize.define('FamilyDoctorRequest', {
    request_type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    health_institution: {
      type: DataTypes.STRING,
      allowNull: false
    },
    request_reason: {
      type: DataTypes.STRING,
      allowNull: false
    },
    family_doctor: {
      type: DataTypes.STRING,
      allowNull: false
    },
    consent: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  }, {
    timestamps: true
  });

  return FamilyDoctorRequest;
};
