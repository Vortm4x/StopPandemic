const mongoose = require('mongoose');

// Define the HealthReport schema
const healthReportSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true
  },
  disease: {
    type: String,
    required: true
  },
  seekEmployees: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Employee',
    required: true
  },
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Company',
    required: true
  }
});

// Create and export the HealthReport model
module.exports = mongoose.model('HealthReport', healthReportSchema);
