// models/Confirmation.js
module.exports = (sequelize, DataTypes) => {
    const Confirmation = sequelize.define('Confirmation', {
      reason: {
        type: DataTypes.STRING,
        allowNull: false
      }
    }, {
      tableName: 'confirmations',
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    });
  
    return Confirmation;
  };
  