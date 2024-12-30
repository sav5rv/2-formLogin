const mongoose = require("mongoose");

const loginAttemptSchema = new mongoose.Schema({
  email: { type: String, required: true },
  success: { type: Boolean, required: true },
  timestamp: { type: Date, required: true },
});

module.exports = mongoose.model("LoginAttempt", loginAttemptSchema);
