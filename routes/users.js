const router = require('express').Router();
const {
  getUser,
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} = require('../controllers/users');

router.get('/', getUsers); //  /users  -- get all users
router.post('/', createUser); // /users -- create new user
router.get('/:userId', getUser); //  /users/:userId -- get user by Id
router.put('/update/:userId', updateUser); //  /users/:userId -- update a user
router.delete('/:userId', deleteUser); //  /users/:userId -- delete a user

module.exports = router;
