'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('kesco_bills', [
      {
        region: 'Region1',
        reference: '12345',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        region: 'Region2',
        reference: '67890',
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('kesco_bills', null, {});
  }
};
