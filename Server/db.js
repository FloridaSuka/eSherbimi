const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sisteme', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.AutoRegjistrim = require('../../models/AutoRegjistrim')(sequelize, DataTypes);
db.AutoB = require('../../models/AutoB')(sequelize, DataTypes);
db.AutoP = require('../../models/AutoP')(sequelize, DataTypes);
db.ApLehonat = require('../../models/ApLehonat')(sequelize, DataTypes);
db.ApFemije = require('../../models/ApFemije')(sequelize, DataTypes);
db.CertiFam = require('../../models/CertiFam')(sequelize, DataTypes);
db.AdPostare = require('../../models/AdPostare')(sequelize, DataTypes);
db.Deklarimi = require('../../models/Deklarimi')(sequelize, DataTypes);
db.Vula = require('../../models/Vula')(sequelize, DataTypes);

module.exports = db;
