const { userService } = require('../services');

const postUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const { status, data } = await userService.postUser(displayName, email, password, image);
  const { token } = data;
  res.status(status).json({ token });
};

module.exports = { postUser };