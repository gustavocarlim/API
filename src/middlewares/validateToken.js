const { User } = require('../models');

const checkIfUserIsNotRegistred = async (req, res, next) => {
  const { email } = req.body;
  const user = await User.findAll();
  const checkUsersMails = user.some((e) => e.dataValues.email.includes(email));
  if (!checkUsersMails) {
    return res.status(400).json({ message: 'Invalid fields' });
  }
  next();
};

module.exports = {
  checkIfUserIsNotRegistred,
};