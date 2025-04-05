// backend/controllers/symptomController.js

exports.addSymptom = (req, res) => {
  const { symptom, date, severity } = req.body;

  console.log("Symptom Data Received:", req.body);

  res.status(201).json({ msg: "Symptom added successfully" });
};

exports.getSymptoms = (req, res) => {
  res.status(200).json([
    { id: 1, symptom: "Fever", date: "2024-01-01", severity: "High" },
    { id: 2, symptom: "Cough", date: "2024-01-02", severity: "Medium" }
  ]);
};
