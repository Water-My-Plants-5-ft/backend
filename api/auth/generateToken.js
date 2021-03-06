const config = require("../secrets/secret.js");
const jwt = require("jsonwebtoken");
// const { jwtSecret } = require("../secrets/secret.js");

module.exports = function generateToken(user) {
  const payload = {
    subject: user.id,
    username: user.username,
    phoneNumber: user.phoneNumber,
  };

  const options = {
    expiresIn: "1w",
  };

  return jwt.sign(payload, config.jwtSecret, options);
};
