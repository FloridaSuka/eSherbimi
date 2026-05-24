'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('AutoBs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      autoType: {
        type: Sequelize.STRING,
        allowNull: false
      },
      ownerType: {
        type: Sequelize.STRING,
        allowNull: false
      },
      englishRegistration: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      mathsRegistration: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      personalNumber: {
        type: Sequelize.STRING,
        allowNull: false
      },
      registrationType: {
        type: Sequelize.STRING,
        allowNull: false
      },
      municipality: {
        type: Sequelize.STRING,
        allowNull: false
      },
      marka: {
        type: Sequelize.STRING,
        allowNull: false
      },
      engineCapacity: {
        type: Sequelize.STRING,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('AutoBs');
  }
};
