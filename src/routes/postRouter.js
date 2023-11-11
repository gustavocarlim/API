const route = require('express').Router();
const { postController } = require('../controllers');
const { verifyToken } = require('../middlewares/tokenAuth');
const { tokenPostBlog } = require('../middlewares/tokenValidate');

route.post('/', tokenPostBlog, verifyToken, postController.createPost);

module.exports = route;