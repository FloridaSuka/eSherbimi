module.exports = (sequelize, DataTypes) => {
    const Donacioni = sequelize.define('Donacioni', {
      amount: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    
    }, {
      tableName: 'donacionis',
      timestamps: true,
      createdAt: 'createdAt',
      updatedAt: 'updatedAt'
    });
  
    return Donacioni;
  };
  
