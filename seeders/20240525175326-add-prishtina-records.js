// seeds/20240525180000-add-prishtina-records.js
'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Prishtinas', [
      {
        searchTerm: 'health',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        searchTerm: 'house',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Prishtinas', null, {});
  }
};
