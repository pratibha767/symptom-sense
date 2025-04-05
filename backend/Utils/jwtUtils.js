const jwt = require('jsonwebtoken');

exports.generateToken = (payload, secret, options = {}) => {
  return jwt.sign(payload, secret, options);
};

exports.verifyToken = (token, secret) => {
  try {
    return jwt.verify(token, secret);
  } catch (error) {
    return null; // Or throw an error if you prefer
  }
};

exports.decodeToken = (token) => {
  try {
    return jwt.decode(token);
  } catch (error) {
    return null; // Or throw an error if you prefer
  }
};

exports.extractTokenFromHeader = (req) => {
  const authHeader = req.headers['authorization'];
  if (authHeader && authHeader.startsWith('Bearer ')) {
    return authHeader.split(' ')[1];
  }
  return null;
};

// Example: Generate a refresh token (if needed)
exports.generateRefreshToken = (payload, secret, options = {}) => {
    return jwt.sign(payload, secret, { ...options, expiresIn: '7d' }); // Example: Refresh token expires in 7 days
};

// Example: Verify a refresh token (if needed)
exports.verifyRefreshToken = (token, secret) => {
    try {
        return jwt.verify(token, secret);
    } catch (error) {
        return null;
    }
}