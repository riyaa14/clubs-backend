// routes/bookingRoutes.js
const express = require("express");
const router = express.Router();
const { createBooking } = require("../controllers/booking");

// POST route to create a new booking
router.post("/", createBooking);

module.exports = router;
