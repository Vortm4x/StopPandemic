const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    username: { 
        type: String, 
        required: true 
    },
    fullName: { 
        type: String, 
        required: true 
    },
    password: { 
        type: String, 
        required: true 
    },
    // role: { 
    //     type: String, 
    //     enum: ['admin', 'moder', 'support'], 
    //     required: true 
    // },
    assignee: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Admin' 
    }
});

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;
