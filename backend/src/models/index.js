const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');
const { serviceDefinitions } = require('../shared-service-definitions');

class ModelRegistry {
  constructor(connection) {
    this.connection = connection;
    this.models = {};
  }

  registerCoreModels() {
    this.models.Tenant = this.connection.define('Tenant', {
      id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
      name: { type: DataTypes.STRING, allowNull: false },
      slug: { type: DataTypes.STRING, allowNull: false, unique: true },
      status: { type: DataTypes.STRING, allowNull: false, defaultValue: 'active' }
    }, { tableName: 'tenants', underscored: true });

    this.models.User = this.connection.define('User', {
      id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
      tenantId: { type: DataTypes.UUID, allowNull: false },
      name: { type: DataTypes.STRING, allowNull: false },
      email: { type: DataTypes.STRING, allowNull: false, unique: true, validate: { isEmail: true } },
      passwordHash: { type: DataTypes.STRING, allowNull: false },
      role: { type: DataTypes.ENUM('admin', 'manager', 'citizen'), allowNull: false, defaultValue: 'citizen' }
    }, { tableName: 'users', underscored: true });

    this.models.AiInteraction = this.connection.define('AiInteraction', {
      id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
      tenantId: { type: DataTypes.UUID, allowNull: false },
      userId: { type: DataTypes.UUID, allowNull: true },
      prompt: { type: DataTypes.TEXT, allowNull: false },
      response: { type: DataTypes.TEXT, allowNull: false },
      model: { type: DataTypes.STRING, allowNull: false }
    }, { tableName: 'ai_interactions', underscored: true });
  }

  registerServiceModels() {
    serviceDefinitions.forEach((definition) => {
      this.models[definition.publicName] = this.connection.define(definition.publicName, {
        id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
        tenantId: { type: DataTypes.UUID, allowNull: false },
        createdById: { type: DataTypes.UUID, allowNull: true },
        referenceNo: { type: DataTypes.STRING, allowNull: false },
        title: { type: DataTypes.STRING, allowNull: false },
        status: { type: DataTypes.ENUM('draft', 'submitted', 'processing', 'approved', 'rejected', 'paid'), defaultValue: 'submitted' },
        amount: { type: DataTypes.DECIMAL(10, 2), defaultValue: 0 },
        metadata: { type: DataTypes.JSON, defaultValue: {} }
      }, {
        tableName: definition.tableName,
        underscored: true,
        indexes: [
          { fields: ['tenant_id'] },
          { fields: ['reference_no'] },
          { fields: ['status'] }
        ]
      });
    });
  }

  associate() {
    const { Tenant, User, AiInteraction } = this.models;
    Tenant.hasMany(User, { foreignKey: 'tenantId' });
    User.belongsTo(Tenant, { foreignKey: 'tenantId' });
    Tenant.hasMany(AiInteraction, { foreignKey: 'tenantId' });
    AiInteraction.belongsTo(Tenant, { foreignKey: 'tenantId' });
    AiInteraction.belongsTo(User, { foreignKey: 'userId' });

    serviceDefinitions.forEach((definition) => {
      const model = this.models[definition.publicName];
      Tenant.hasMany(model, { foreignKey: 'tenantId' });
      model.belongsTo(Tenant, { foreignKey: 'tenantId' });
      model.belongsTo(User, { foreignKey: 'createdById', as: 'createdBy' });
    });
  }

  build() {
    this.registerCoreModels();
    this.registerServiceModels();
    this.associate();
    return this.models;
  }
}

const registry = new ModelRegistry(sequelize);
const models = registry.build();

module.exports = { sequelize, models, serviceDefinitions };
