module.exports = (sequelize, DataTypes) => {
  const Policia2 = sequelize.define('Policia2', {
    searchTerm: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    timestamps: true,
    tableName: 'Policia2s'
  });

  return Policia2;
};
