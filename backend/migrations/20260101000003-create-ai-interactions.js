module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ai_interactions', {
      id: { type: Sequelize.UUID, primaryKey: true, allowNull: false },
      tenant_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: { model: 'tenants', key: 'id' },
        onDelete: 'CASCADE'
      },
      user_id: {
        type: Sequelize.UUID,
        allowNull: true,
        references: { model: 'users', key: 'id' },
        onDelete: 'SET NULL'
      },
      prompt: { type: Sequelize.TEXT, allowNull: false },
      response: { type: Sequelize.TEXT, allowNull: false },
      model: { type: Sequelize.STRING, allowNull: false },
      created_at: { type: Sequelize.DATE, allowNull: false },
      updated_at: { type: Sequelize.DATE, allowNull: false }
    });
    await queryInterface.addIndex('ai_interactions', ['tenant_id']);
  },
  async down(queryInterface) {
    await queryInterface.dropTable('ai_interactions');
  }
};
