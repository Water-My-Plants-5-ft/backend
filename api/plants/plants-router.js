const router = require("express").Router();

const Plants = require("./plants-model.js");

const { validateID, validatePlant } = require("../middleware/middleware");

router.get("/:id", validateID, (req, res) => {
  Plants.findByID(req.params.id)
    .then((plant) => res.status(200).json(plant))
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        message: `An Error occurred when retrieving Plant with ID ${req.params.id}`,
      });
    });
});

router.put("/:id", validateID, validatePlant, (req, res) => {
  Plants.update(req.params.id, req.body)
    .then((updated) => res.status(201).json(updated))
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        message: `An Error occurred when attempting to Update Plant with ID ${req.params.id}`,
      });
    });
});

router.delete("/:id", validateID, (req, res) => {
  Plants.remove(req.params.id)
    .then((removed) =>
      res
        .status(200)
        .json({ message: `Plant with ID ${req.params.id} has been deleted` })
    )
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        message: `An Error occurred when attempting to Delete Plant with ID ${req.params.id}`,
      });
    });
});

module.exports = router;
