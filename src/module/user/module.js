const UserController = require('./controller/userController');
const UserService = require('./service/userService');
const UserRepository = require('./repository/userRepository');
const UserModel = require('./model/userModel');
const userRoutes = require('./routes/userRoutes');

module.exports = {
  UserController,
  UserService,
  UserRepository,
  UserModel,
  userRoutes,
};
