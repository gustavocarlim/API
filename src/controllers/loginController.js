const { loginService } = require('../services');

const userLogin = async (req, res) => {
  const { email, password, token } = req.body;
  const { status } = await loginService.findUser(email, password);
  return res.status(status).json({ token });
};

module.exports = {
  userLogin,
};