const UserController = require('./controller/userController');
const UserService = require('./service/userService');
const UserRepository = require('./repository/userRepository');
const UserModel = require('./model/userModel');
const userRoutes = require('./routes/userRoutes');

const initUserModule = (app, container) => {
  app.use(userRoutes(container));
};

module.exports = {
  UserController,
  UserService,
  UserRepository,
  UserModel,
  initUserModule,
};
