'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('kru_water_bills', 'name', {
      type: Sequelize.STRING,
      allowNull: false
    });
    await queryInterface.addColumn('kru_water_bills', 'address', {
      type: Sequelize.STRING,
      allowNull: false
    });
    await queryInterface.addColumn('kru_water_bills', 'price', {
      type: Sequelize.FLOAT,
      allowNull: false
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('kru_water_bills', 'name');
    await queryInterface.removeColumn('kru_water_bills', 'address');
    await queryInterface.removeColumn('kru_water_bills', 'price');
  }
};
