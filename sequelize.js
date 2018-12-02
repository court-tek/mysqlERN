const Sequelize = require('sequelize');
const UserModel = require('./models/User');
const keys = require('./config/keys');

const sequelize = new Sequelize(keys.database, keys.username, keys.password, {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false
});
// imported models
const Hello = UserModel(sequelize, Sequelize);

sequelize.sync()
.then(() => {
  console.log('db initiated and users table created');
});

module.exports = Hello;
