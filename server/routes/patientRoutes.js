const express = require("express");
const router = express.Router();

// Example test route
router.get("/", (req, res) => {
  res.send("Patient route working!");
});

module.exports = router;