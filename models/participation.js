module.exports = (sequelize, DataTypes) => {
    const Participation = sequelize.define('Participation', {
        donationAmount: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        }
    }, {
        timestamps: true
    });

    return Participation;
};
