const express = require("express");
const { classifyNumber } = require("../controller/classifyController");

const router = express.Router();

router.get("/classify-number", classifyNumber);

module.exports = router;
