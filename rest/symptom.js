const express = require('express');
const Symptom = require('../models/symptom');

const router = express.Router();

// Add a new symptom
router.post('/add', (req, res) => {
    const { name, description } = req.body;

    const newSymptom = new Symptom({
        name,
        description
    });

    newSymptom.save()
        .then(savedSymptom => {
            res.status(201).json({ message: 'Symptom added successfully.', symptom: savedSymptom });
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ error: 'Failed to add the symptom.' });
        });
});

// Retrieve all symptoms
router.get('/', (req, res) => {
    Symptom.find()
        .then(symptoms => {
            res.json(symptoms);
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ error: 'Failed to retrieve symptoms.' });
        });
});

// Delete a symptom by ID
router.delete('/', (req, res) => {
    const symptomId = req.query.id;

    Symptom.findByIdAndDelete(symptomId)
        .then(deletedSymptom => {
            if (!deletedSymptom) {
                return res.status(404).json({ error: 'Symptom not found.' });
            }
            res.json({ message: 'Symptom deleted successfully.' });
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ error: 'Failed to delete the symptom.' });
        });
});

// Update a symptom by ID
router.put('/', (req, res) => {
    const symptomId = req.query.id;
    const { name, description } = req.body;

    Symptom.findByIdAndUpdate(symptomId, { name, description }, { new: true })
        .then(updatedSymptom => {
            if (!updatedSymptom) {
                return res.status(404).json({ error: 'Symptom not found.' });
            }
            res.json({ message: 'Symptom updated successfully.', symptom: updatedSymptom });
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ error: 'Failed to update the symptom.' });
        });
});

// Get a symptom by ID
router.get('/', (req, res) => {
    const symptomId = req.query.id;

    Symptom.findById(symptomId)
        .then(symptom => {
            if (!symptom) {
                return res.status(404).json({ error: 'Symptom not found.' });
            }
            res.json(symptom);
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ error: 'Failed to retrieve the symptom.' });
        });
});

module.exports = router;
