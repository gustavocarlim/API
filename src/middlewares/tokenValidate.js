const jwt = require('jsonwebtoken');
const { loginService } = require('../services');

const SECRET_KEY = process.env.JWT_SECRET;

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const generateToken = (payload) => {
  const token = jwt.sign({ data: payload }, SECRET_KEY, jwtConfig);
  return token;
};

const createToken = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  const user = await loginService.findUser(email, password);
  if (!user) {
    return res.status(401).json({ message: 'Invalid fields' });
  }
  const filteredUser = user.data;
  const token = generateToken(filteredUser);

  req.body.token = token;
  next();
};

const tokenPostBlog = async (req, res, next) => {
  const { title, content, categoryIds } = req.body;
  if (!title || !content || !categoryIds) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  next();
};

module.exports = {
  createToken,
  tokenPostBlog,
};