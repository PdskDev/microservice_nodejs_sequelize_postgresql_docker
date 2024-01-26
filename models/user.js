const Sequilize = require('sequelize');
const database = require('../util/database');

const User = database.define('user', {
  id: {
    type: Sequilize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: Sequilize.STRING,
  email: Sequilize.STRING,
});

module.exports = User;
