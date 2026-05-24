// migrations/YYYYMMDDHHMMSS-create-ap_lehonat.js
'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ap_lehonat', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      nrPersonal: {
        type: Sequelize.STRING,
        allowNull: false
      },
      contact: {
        type: Sequelize.STRING,
        allowNull: false
      },
      adresa: {
        type: Sequelize.STRING,
        allowNull: false
      },
      nrXhiro: {
        type: Sequelize.STRING,
        allowNull: false
      },
      gender: {
        type: Sequelize.STRING,
        allowNull: false
      },
      isEmployed: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      aprovoj: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      english: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      maths: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      physics: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      nrFoshnjes: {
        type: Sequelize.STRING,
        allowNull: false
      },
      nationality: {
        type: Sequelize.STRING,
        allowNull: false
      },
      about: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('ap_lehonat');
  }
};
