const jwt = require('jsonwebtoken');

const SECRET_KEY = process.env.JWT_SECRET;

const extractToken = (bearerToken) => bearerToken.split(' ')[1];

const verifyToken = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || authorization === '') {
    return res.status(401).json({
      message: 'Token not found',
    });
  }

  try {
    const token = extractToken(authorization);

    if (!token) {
      throw new Error();
    }

    jwt.verify(token, SECRET_KEY);

    next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = { verifyToken };