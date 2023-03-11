const { validateToken } = require('../helpers/JWTUtils');

const tokenValidator = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) return res.status(401).json({ message: 'Token not found' });
  try {
    const { data: { role } } = validateToken(token);
    if (role !== 'administrator') return res.status(401).json({ message: 'Unauthorized' });
    next();
  } catch (err) {
   return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = tokenValidator;
