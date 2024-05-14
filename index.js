const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const route = require("./routes/TodoRoutes");
require("dotenv").config();
const app = express();
const PORT = process.env.port || 4000;
app.use(express.json());
app.use(cors());
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("connected to url...."))
  .catch((err) => console.log(err, "error occured"));

app.use(route);
app.listen(PORT, () => console.log(`running on the port of ${4000}`));
