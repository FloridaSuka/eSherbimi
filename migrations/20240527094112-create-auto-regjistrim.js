'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('AutoRegjistrim', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      autoTipi: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      regjistrimiRi: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      ndryshimiPronarit: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      komuna: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      marka: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      motorCcm: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('AutoRegjistrim');
  },
};
