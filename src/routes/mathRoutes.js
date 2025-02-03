const express = require("express");
const { getMathFacts } = require("../utils/mathUtils");

const router = express.Router();

router.get("/:number", (req, res) => {
  const number = parseInt(req.params.number);

  if (isNaN(number)) {
    return res.status(400).json({
      message: "Invalid number. Please provide a valid integer.",
    });
  }

  const result = getMathFacts(number);
  res.status(200).json(result);
});

module.exports = router;
