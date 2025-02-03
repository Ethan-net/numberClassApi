const express = require("express");
const cors = require("cors");
const mathRoutes = require("./src/routes/mathRoutes");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.use("/math", mathRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
