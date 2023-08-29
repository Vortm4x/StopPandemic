const mongoose = require('mongoose');

const healthReportSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true
  },
  employee: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Employee',
    required: true
  },
  disease: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Disease'
  },
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Company',
    required: true
  }
});

const HealthReport = mongoose.model('HealthReport', healthReportSchema);

module.exports = HealthReport;