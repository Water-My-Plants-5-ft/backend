const config = require("../Secrets/secret.js");
const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    const secret = config.jwtSecret;

    jwt.verify(token, secret, (err) => {
      if (err) {
        res.status(400).json({
          message: "Invalid Token",
        });
      } else {
        next();
      }
    });
  } else {
    res.status(401).json({
      message: "You must be logged in to access this data",
    });
  }
};
