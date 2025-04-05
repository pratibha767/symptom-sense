// backend/routes/symptoms.js

const express = require("express");
const router = express.Router();
const {
  addSymptom,
  getSymptoms
} = require("../controllers/symptomController");

router.post("/add", addSymptom);
router.get("/all", getSymptoms);

module.exports = router;
