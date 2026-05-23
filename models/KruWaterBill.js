// models/KruWaterBill.js
module.exports = (sequelize, DataTypes) => {
  const KruWaterBill = sequelize.define('KruWaterBill', {
    consumer_number: {
      type: DataTypes.STRING,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  }, {
    tableName: 'kru_water_bills',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });

  return KruWaterBill;
};
