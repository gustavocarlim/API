const { User } = require('../models');

const userValidateDisplayAndEmail = async (req, res, next) => {
  const { displayName, email } = req.body;
  const regex = /\S+@\S+\.\S+/;

  if (!displayName || displayName.length < 8) {
    return res.status(400).json({
      message: '"displayName" length must be at least 8 characters long',
    });
  }

  if (!email || !regex.test(email)) {
    return res.status(400).json({
      message: '"email" must be a valid email',
    });
  }

  next();
};

const userValidatePswdAndExists = async (req, res, next) => {
  const { email, password } = req.body;
  const userExist = await User.findOne({ where: { email } });

  if (!password || password.length < 6) {
    return res.status(400).json({
      message: '"password" length must be at least 6 characters long',
    });
  }

  if (userExist) {
    return res.status(409).json({ message: 'User already registered' });
  }

  next();
};

module.exports = { userValidateDisplayAndEmail, userValidatePswdAndExists };