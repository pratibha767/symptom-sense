const mongoose = require('mongoose');

const SymptomEntrySchema = new mongoose.Schema({
  description: { type: String, required: true },
  severity: { type: Number, required: true },
  date: { type: Date, default: Date.now },
  notes: { type: String },
});

module.exports = mongoose.model('SymptomEntry', SymptomEntrySchema);
