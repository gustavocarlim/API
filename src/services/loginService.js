const { User } = require('../models'); 

const findAllUsers = async () => {
  const response = await User.findAll();
  return { status: 200, data: response };
};

const findUser = async (email, password) => {
  const response = await User.findOne({ 
    where: { email, password },
    attributes: { exclude: ['password'] },
  });
  return { status: 200, data: response };
};

module.exports = {
  findUser,
  findAllUsers,
};