const serviceColumns = (Sequelize) => ({
  id: { type: Sequelize.UUID, primaryKey: true, allowNull: false },
  tenant_id: {
    type: Sequelize.UUID,
    allowNull: false,
    references: { model: 'tenants', key: 'id' },
    onDelete: 'CASCADE'
  },
  created_by_id: {
    type: Sequelize.UUID,
    allowNull: true,
    references: { model: 'users', key: 'id' },
    onDelete: 'SET NULL'
  },
  reference_no: { type: Sequelize.STRING, allowNull: false },
  title: { type: Sequelize.STRING, allowNull: false },
  status: { type: Sequelize.STRING, allowNull: false, defaultValue: 'submitted' },
  amount: { type: Sequelize.DECIMAL(10, 2), allowNull: false, defaultValue: 0 },
  metadata: { type: Sequelize.JSON, allowNull: false, defaultValue: {} },
  created_at: { type: Sequelize.DATE, allowNull: false },
  updated_at: { type: Sequelize.DATE, allowNull: false }
});

const createServiceTable = (tableName) => ({
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(tableName, serviceColumns(Sequelize));
    await queryInterface.addIndex(tableName, ['tenant_id']);
    await queryInterface.addIndex(tableName, ['reference_no']);
    await queryInterface.addIndex(tableName, ['status']);
  },
  async down(queryInterface) {
    await queryInterface.dropTable(tableName);
  }
});

module.exports = { createServiceTable };
