const User = require('../models/user');

//Get All users
const getUsers = (req, res, next) => {
  User.findAll()
    .then((users) => {
      res.status(200).json({ users: users });
    })
    .catch((error) => console.log(error));
};

//Get one user by Id
const getUser = (req, res, next) => {
  const userId = req.params.userId;
  User.findByPk(userId)
    .then((user) => {
      if (!user) {
        return res.status(404).json({ message: 'User not found!' });
      }
      res.status(200).json({ user: user });
    })
    .catch((error) => console.log(error));
};

//Create user
const createUser = (req, res, next) => {
  const newName = req.body.name;
  const newEmail = req.body.email;

  User.create({
    name: newName,
    email: newEmail,
  })
    .then((result) => {
      console.log('Created user');
      res.status(201).json({
        message: 'User created successfully',
        user: result,
      });
    })
    .catch((error) => console.log(error));
};

//Update user
const updateUser = (req, res, next) => {
  const userId = req.params.userId;
  const nameToUpdate = req.body.name;
  const emailToUpdate = req.body.email;

  User.findByPk(userId)
    .then((user) => {
      if (!user) {
        return res.status(404).json({ message: 'User not found!' });
      }

      user.name = nameToUpdate;
      user.email = emailToUpdate;
      return user.save();
    })
    .then((updatedUser) => {
      res
        .status(200)
        .json({ message: 'User updated successfully', user: updatedUser });
    })
    .catch((error) => console.log(error));
};

//Delete User
const deleteUser = (req, res, next) => {
  const userId = req.params.userId;

  User.findByPk(userId)
    .then((user) => {
      if (!user) {
        return res.status(404).json({ message: 'User not found!' });
      }

      return User.destroy({
        where: {
          id: userId,
        },
      });
    })
    .then((deletedUser) => {
      res.status(200).json({ message: 'User deleted successfully' });
    })
    .catch((error) => console.log(error));
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};
