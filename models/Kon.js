// models/Kon.js
module.exports = (sequelize, DataTypes) => {
    const Kon = sequelize.define('Kon', {
      au: {
        type: DataTypes.STRING,
        allowNull: false
      },
      approve: {
        type: DataTypes.BOOLEAN,
        allowNull: false
      }
    }, {
      tableName: 'kon',
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    });
  
    return Kon;
  };
  