const Sequilize = require('sequelize');
const db = require('../util/database');

const User = db.define('user', {
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
