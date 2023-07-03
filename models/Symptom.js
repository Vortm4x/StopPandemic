const mongoose = require('mongoose');

const symptomSchema = new mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
});

const Symptom = mongoose.model('Symptom', symptomSchema);

module.exports = Symptom;