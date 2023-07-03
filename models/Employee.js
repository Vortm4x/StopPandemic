const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    id: { type: String, required: true },
    companyId: { type: mongoose.Schema.Types.ObjectId, ref: 'Company', required: true },
    officeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Office', default: null },
    accessLevel: { type: String, enum: ['regular', 'moder', 'admin', 'owner'], required: true },
    name: { type: String, required: true },
    position: { type: String, required: true },
    phone: { type: String },
    email: { type: String },
});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
