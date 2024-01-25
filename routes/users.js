const controller = require('../controllers/users');
const router = require('express').Router();

router.get('/', controller.getUsers); //  /users  -- get all users
router.get('/:userId', controller.getUser); //  /users/:userId -- get user by Id
router.post('/', controller.createUser); // /users -- create new user
router.put('/:userId', controller.updateUser); //  /users/:userId -- update a user
router.delete('/:userId', controller.deleteUser); //  /users/:userId -- delete a user

module.exports = router;
