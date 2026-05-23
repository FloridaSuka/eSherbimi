
module.exports = (sequelize, DataTypes) => {
    const Policia3 = sequelize.define('Policia3', {
      personalNumber: DataTypes.STRING,
      fullName: DataTypes.STRING,
      city: DataTypes.STRING,
      phone: DataTypes.STRING,
      email: DataTypes.STRING,
      selectedOption: DataTypes.STRING,
      station: DataTypes.STRING,
      reason: DataTypes.STRING,
      dek: DataTypes.STRING
    }, {
      tableName: 'Policia3s',
      timestamps: true,
      createdAt: 'createdAt',
      updatedAt: 'updatedAt'
    });
  
    return Policia3;
  };
  
