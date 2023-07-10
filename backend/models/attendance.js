const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
  date: { 
    type: Date, 
    required: true 
  },
  presentedEmployees: { 
    type: [mongoose.Schema.Types.ObjectId], 
    ref: 'Employee' 
  },
  office: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Office' 
  }
});

const Attendance = mongoose.model('Attendance', attendanceSchema);

module.exports = Attendance;
