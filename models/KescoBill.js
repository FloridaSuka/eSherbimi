// models/KescoBill.js
module.exports = (sequelize, DataTypes) => {
  const KescoBill = sequelize.define('KescoBill', {
      region: {
          type: DataTypes.STRING,
          allowNull: false,
      },
      reference: {
          type: DataTypes.STRING,
          allowNull: false,
      }
  }, {
      tableName: 'kesco_bills',
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at'
  });

  return KescoBill;
};
