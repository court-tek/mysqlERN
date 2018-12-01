const express = require('express');
const mysql = require('mysql2');
const keys = require('./config/keys');
const Sequelize = require('sequelize');
const User = require('./models/User');
require('./services/passport');


const sequelize = new Sequelize(keys.database, keys.username, keys.password, {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false
});

const app = express();

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
// Log to feedback that this is actually running
console.log('Server started on port ' + PORT);
