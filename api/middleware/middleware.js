// const router = require("express").Router();

const Plants = require("../plants/plants-model");
const Users = require("../users/users-model");

module.exports = {
  validateNewUser,
  validateLogin,
  validateID,
  validatePlant,
  validateUserID,
};

function validateNewUser(req, res, next) {
  if (Object.keys(req.body).length === 0) {
    res.status(401).json({ message: "No User Data provided" });
  } else if (
    !req.body.username ||
    !req.body.password ||
    !req.body.phone_number
  ) {
    res.status(401).json({
      message: "Username, Password, and Phone Number are ALL REQUIRED!",
    });
  } else {
    next();
  }
}

function validateLogin(req, res, next) {
  if (Object.keys(req.body).length === 0) {
    res.status(400).json({ message: "No Credentials provided" });
  } else if (!req.body.username || !req.body.password) {
    res.status(400).json({ message: "Username AND Password are REQUIRED!" });
  } else {
    next();
  }
}

function validateID(req, res, next) {
  Plants.findByID(req.params.id).then((user) => {
    if (!user) {
      res.status(400).json({ message: "Invalid Plant ID" });
    } else {
      next();
    }
  });
}

// function validatePlant(req, res, next) {
//   if (Object.keys(req.body).length === 0) {
//     res.status(401).json({ message: "No User Data provided" });
//   } else if (
//     !req.body.nickname ||
//     !req.body.species ||
//     !req.body.h2o_frequency
//   ) {
//     res.status(401).json({
//       message: "Nickname, Species, and H20 Frequency are ALL REQUIRED!",
//     });
//   } else {
//     next();
//   }
// }

function validateUserID(req, res, next) {
  Users.findByID(req.params.id).then((user) => {
    if (!user) {
      res.status(400).json({ message: "Invalid User ID" });
    } else {
      next();
    }
  });
}

function validatePlant(req, res, next) {
  if (Object.keys(req.body).length === 0) {
    res.status(401).json({ message: "No Plant Data provided" });
  } else if (
    !req.body.nickname ||
    !req.body.species ||
    !req.body.h2o_frequency
  ) {
    res.status(401).json({
      message: "Nickname, Species, and H20 Frequency are ALL REQUIRED!",
    });
  } else {
    next();
  }
}
