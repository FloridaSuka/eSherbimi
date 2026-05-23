// models/Prishtina.js
module.exports = (sequelize, DataTypes) => {
    const Prishtina = sequelize.define('Prishtina', {
        searchTerm: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        timestamps: true
    });

    return Prishtina;
};
