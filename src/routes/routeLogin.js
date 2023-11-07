const route = require('express').Router();
const { loginController } = require('../controllers');
const { createToken } = require('../utils/token');
const { checkIfUserIsNotRegistred } = require('../middlewares/validateToken');

route.post('/', createToken, checkIfUserIsNotRegistred, loginController.userLogin);

module.exports = route;