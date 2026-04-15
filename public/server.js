const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect("YOUR_MONGODB_CONNECTION_STRING")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// Booking Model
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

const Booking = mongoose.model("Booking", bookingSchema);

// Save Booking
app.post("/api/book", async (req, res) => {
  try {
    const booking = new Booking(req.body);
    await booking.save();
    res.send("Booking Saved");
  } catch (err) {
    res.status(500).send(err);
  }
});

// Get All Bookings
app.get("/api/bookings", async (req, res) => {
  const bookings = await Booking.find();
  res.json(bookings);
});

// Update Status
app.put("/api/book/:id", async (req, res) => {
  await Booking.findByIdAndUpdate(req.params.id, req.body);
  res.send("Updated");
});

// Delete Booking
app.delete("/api/book/:id", async (req, res) => {
  await Booking.findByIdAndDelete(req.params.id);
  res.send("Deleted");
});

app.listen(5000, () => console.log("Server running on port 5000"));
