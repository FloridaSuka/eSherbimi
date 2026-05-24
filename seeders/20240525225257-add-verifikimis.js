'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('verifikimis', [
            {
                ref: 'REF003',
                selectedOption: 'Option A',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                ref: 'REF004',
                selectedOption: 'Option B',
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('verifikimis', null, {});
    }
};
