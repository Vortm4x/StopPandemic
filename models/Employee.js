const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    email: { 
        type: String, 
        required: true 
    },
    password: { 
        type: String, 
        required: true 
    },
    company: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Company', 
        required: true 
    },
    accessLevel: { 
        type: String, 
        enum: ['regular', 'moder', 'admin', 'owner'], 
        required: true 
    },
    name: { 
        type: String, 
        required: true 
    },
    position: { 
        type: String, 
        required: true 
    },
    phone: { 
        type: String 
    }
});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
