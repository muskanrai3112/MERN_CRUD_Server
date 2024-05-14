const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  name: String,
  password: String,
  email: String,
});

module.exports = mongoose.model("user", userSchema);
