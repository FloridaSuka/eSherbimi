module.exports = (sequelize, DataTypes) => {
    const Vula = sequelize.define('Vula', {
      personalNumber: {
        type: DataTypes.STRING,
        allowNull: false
      },
      fullName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false
      }
    }, {});
    Vula.associate = function(models) {
      // associations can be defined here
    };
    return Vula;
  };
  