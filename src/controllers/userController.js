const { User } = require('../models');
const { userService } = require('../services/userService');

const postUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const { status, data } = await userService.postUser(displayName, email, password, image);
  const { token } = data;
  res.status(status).json({ token });
};

const getAllUsers = async (_req, res) => {
  const { status, data } = await userService.getAllUsers();

  return res.status(status).json(data);
};

const getUserById = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findByPk(id, {
      attributes: { exclude: ['password'] },
    });

    if (!user) {
      return res.status(404).json({ message: 'User does not exist' });
    }

    return res.status(200).json(user);
  } catch (error) {
    console.error('Erro ao buscar usuário por ID:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { postUser, getAllUsers, getUserById };