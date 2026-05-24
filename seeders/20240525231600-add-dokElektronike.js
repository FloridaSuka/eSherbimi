'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('dokElektronikes', [
      {
        ref: '12345',
        selectedOption: 'Option A',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ref: '67890',
        selectedOption: 'Option B',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('dokElektronikes', null, {});
  }
};
