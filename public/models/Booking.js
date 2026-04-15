const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  name: String,
  company: String,
  email: String,
  serviceType: String,
  instrumentType: String,
  machine: String,
  problem: String,
  phone: String,
  location: String,
  status: { type: String, default: "pending" }
});

module.exports = mongoose.model("Booking", bookingSchema);
