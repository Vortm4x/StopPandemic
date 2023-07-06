const mongoose = require('mongoose');

const diseaseSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true 
  },
  description: { 
    type: String, 
    required: true 
  },
  symptoms: { 
    type: [mongoose.Schema.Types.ObjectId], 
    ref: 'Symptom', 
    required: true 
  }
});

const Disease = mongoose.model('Disease', diseaseSchema);

module.exports = Disease;