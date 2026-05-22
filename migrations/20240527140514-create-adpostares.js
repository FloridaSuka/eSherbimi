'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('adpostares', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Komuna: {
        type: Sequelize.STRING,
        allowNull: false
      },
      Vendbanimi: {
        type: Sequelize.STRING,
        allowNull: false
      },
      Numri: {
        type: Sequelize.STRING,
        allowNull: false
      },
      Rruga: {
        type: Sequelize.STRING,
        allowNull: false
      },
      Kodi: {
        type: Sequelize.STRING,
        allowNull: false
      },
      selectedOption: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('adpostares');
  }
};
