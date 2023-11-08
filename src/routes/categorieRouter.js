const route = require('express').Router();
const { categorieController } = require('../controllers');
const { verifyToken } = require('../middlewares/tokenAuth');

route.post('/', verifyToken, categorieController.addNewCategory);
route.get('/', verifyToken, categorieController.getAllCategory);

module.exports = route;