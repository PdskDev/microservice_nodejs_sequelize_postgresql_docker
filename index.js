const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('sequelize');
const User = require('./models/user');
const database = require('./util/database');
const users_routes = require('./routes/users');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methos', 'GET', 'POST', 'PUT', 'DELETE');
  next();
});

//Welcome & test route
app.get('/', (req, res, next) => {
  res.status(200).json({
    message:
      'Welcome to NadetDev NodeJS PostGreSQL Sequelize API.\nPlease use "/users" endpoint with Postman.',
  });
});

//CRUD routes
app.use('/users', users_routes);

//Error handling
app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const messageError = error.message;
  res.status(status).json({ message: messageError });
});

//sync database
database
  .sync()
  .then((result) => {
    console.log('Database connected');
    app.listen(3000);
  })
  .catch((error) => console.log(error));
