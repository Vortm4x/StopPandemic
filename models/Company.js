const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
    id: { type: String, required: true },
    name: { type: String, required: true },
    creationDate: { type: Date, required: true },
    description: { type: String },
    address: { type: String }
});

const Company = mongoose.model('Company', companySchema);

module.exports = Company;
