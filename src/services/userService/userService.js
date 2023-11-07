const { User } = require('../../models');
const { generateToken } = require('../../utils/token');

const postUser = async (name, mail, password, img) => {
  const userData = {
    displayName: name,  
    email: mail,
    password,
  };

  if (img) {
    userData.image = img;
  }
  const newUser = await User.create(userData);
  const { id, displayName, email, image } = newUser;
  const tokenData = { id, displayName, email };

  if (image) {
    tokenData.image = image;
  }
  const token = generateToken(tokenData);

  return { status: 201, data: { token } };
};

const getAllUsers = async () => {
  const users = await User.findAll({
    attributes: { exclude: ['password'] },
  });

  return { status: 200, data: users };
};

const getUserById = async (id) => {
  const user = await User.findOne({
    where: { id },
    attributes: { exclude: ['password'] },
  });

  if (!user) { 
    return { statusCode: 404,
      data: {
        message: 'User does not exist',
      } };
  }

  return { status: 200, data: user };
};

module.exports = { postUser, getAllUsers, getUserById };