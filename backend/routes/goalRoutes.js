const express = require("express");

const router = express.Router();

const { getGoals } = require("../controllers/goalController");

router.get("/", getGoals);

router.post("/", (req, res) => {
  res.status(200).json({ message: "Create goals!" });
});

router.put("/:id", (req, res) => {
  res.status(200).json({ message: `Update goal ${req.params.id}` });
});

router.delete("/:id", (req, res) => {
  res.status(200).json({ message: `This deletes ${req.params.id}` });
});

module.exports = router;
