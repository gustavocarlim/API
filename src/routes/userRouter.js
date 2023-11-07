const router = require('express').Router();
const { userController } = require('../controllers');
const { userValidateDisplayAndEmail, 
  userValidatePswdAndExists } = require('../middlewares/validateUser');

router.post('/', userValidateDisplayAndEmail, userValidatePswdAndExists, userController.postUser);

module.exports = router;