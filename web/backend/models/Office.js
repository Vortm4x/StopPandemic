const mongoose = require('mongoose');

const officeSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true 
    },
    address: { 
        type: String, 
        required: true 
    },
    isClosed: { 
        type: Boolean, 
        required: true 
    },
    company: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Company', 
        required: true 
    }
});

const Office = mongoose.model('Office', officeSchema);

module.exports = Office;