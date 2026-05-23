// models/Deklarimi.js
module.exports = (sequelize, DataTypes) => {
    const Deklarimi = sequelize.define('Deklarimi', {
      antarsim: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      canetaresimin: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      selectedOption: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  
    return Deklarimi;
  };
  