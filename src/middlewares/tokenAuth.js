const jwt = require('jsonwebtoken');

const SECRET_KEY = process.env.JWT_SECRET;

const verifyToken = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization || authorization.length === '') {
    return res.status(401).json({ message: 'Token not found' });
  }
  const token = authorization;
  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    
    const { data } = decoded;

    req.user = data;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = {
  verifyToken,
};