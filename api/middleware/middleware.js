// const router = require("express").Router();

const Plants = require("../plants/plants-model");
const Users = require("../users/users-model");

module.exports = {
  isValidReg,
  isValidLogin,
  validateID,
  validatePlant,
  validateUserID,
};

function isValidReg(user) {
  return Boolean(user.name && user.username && user.password);
}

function isValidLogin(user) {
  return Boolean(user.username && user.password);
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

function validatePlant(req, res, next) {
  if (Object.keys(req.body).length === 0) {
    res.status(401).json({ message: "No User Data provided" });
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

function validateUserID(req, res, next) {
  Users.findByID(req.params.id).then((user) => {
    if (!user) {
      res.status(400).json({ message: "Invalid User ID" });
    } else {
      next();
    }
  });
}
