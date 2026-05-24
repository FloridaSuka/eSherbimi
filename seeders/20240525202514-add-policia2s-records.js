'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Policia2s', [
      {
        searchTerm: 'Krenare',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        searchTerm: 'Liburna',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Policia2s', null, {});
  }
};
