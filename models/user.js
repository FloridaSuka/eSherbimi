const users = sequelize.define("users", {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
    password: {
        type: DataTypes.STRING, 
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
});
