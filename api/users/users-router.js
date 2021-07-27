const router = require("express").Router();

const bcrypt = require("bcryptjs");

const Users = require("./users-model.js");

const Plants = require("../plants/plants-model");

const { validateUserID, validatePlant } = require("../middleware/middleware");

router.get("/", (req, res) => {
  Users.find()
    .then((list) => res.status(200).json(list))
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        message:
          "An Error occurred when attempting to retrieve a list of users",
      });
    });
});

router.get("/:id", validateUserID, (req, res) => {
  Users.findByID(req.params.id)
    .then((user) => res.status(200).json(user))
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        message: `An Error occurred when retrieving info for User ID ${req.params.id}`,
      });
    });
});

router.get("/:id/plants", validateUserID, (req, res) => {
  Users.findPlantsByUserID(req.params.id)
    .then((plants) => res.status(200).json(plants))
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        message: `An Error occurred when retrieving info for User ID ${req.params.id}`,
      });
    });
});

router.post("/:id/plants", validateUserID, validatePlant, (req, res) => {
  // const plant = {...req.body, user_id: req.params.id}
  const plant = {
    user_id: req.params.id,
    nickname: req.body.nickname,
    species: req.body.species,
    h2o_frequency: req.body.h2o_frequency,
    img_url: req.body.img_url,
  };
  Plants.add(plant)
    .then((added) => res.status(201).json(added))
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        message:
          "An Error occurred when attempting to add Plant to the Database",
      });
    });
});

router.put("/:id", validateUserID, (req, res) => {
  if (!req.body.password) {
    Users.update(req.params.id, req.body)
      .then((updated) => res.status(200).json(updated))
      .catch((err) => {
        console.log(err);
        res.status(500).json({
          message: `An Error occurred when attempting to Update User ID ${req.params.id}`,
        });
      });
  } else {
    const rounds = process.env.HASH_ROUNDS || 12;
    const newHash = bcrypt.hashSync(req.body.password, rounds);
    const newInfo = {
      username: req.body.username,
      password: newHash,
      phone_number: req.body.phone_number,
    };
    Users.update(req.params.id, newInfo)
      .then((updated) => res.status(200).json(updated))
      .catch((err) => {
        console.log(err);
        res.status(500).json({
          message: `An Error occurred when attempting to Update User ID ${req.params.id}`,
        });
      });
  }
});

router.delete("/:id", validateUserID, (req, res) => {
  Users.remove(req.params.id)
    .then((removed) =>
      res
        .status(200)
        .json({ message: `User with ID ${req.params.id} has been deleted` })
    )
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        message: `An Error occurred when attempting to Delete User with ID ${req.params.id}`,
      });
    });
});

module.exports = router;
