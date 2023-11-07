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
module.exports = { postUser, getAllUsers };