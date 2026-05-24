'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('kru_water_bills', [
      {
        consumer_number: '12345',
        name: 'John Doe',
        address: '123 Main St',
        price: 50.75,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        consumer_number: '67890',
        name: 'Jane Smith',
        address: '456 Elm St',
        price: 75.00,
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('kru_water_bills', null, {});
  }
};
