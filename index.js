// index.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const router = require("./src/routes/mathRoutes");

const app = express();
const PORT = process.env.PORT || 4100;

app.use(express.json());
app.use(cors());
app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
