const express = require('express');
const Disease = require('../models/Disease');

const router = express.Router();

// Add a new disease
router.post('/add', (req, res) => {
    const { name, description } = req.body;

    const newDisease = new Disease({
        name,
        description,
    });

    newDisease.save()
        .then(savedDisease => {
            res.status(201).json(savedDisease);
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ error: 'Failed to add the disease.' });
        });
});

// Retrieve diseases
router.get('/', (req, res) => {
    const diseaseId = req.query.id;

    if (diseaseId) {
        // Retrieve a disease by ID
        Disease.findById(diseaseId)
            .then(disease => {
                if (!disease) {
                    return res.status(404).json({ error: 'Disease not found.' });
                }
                res.json(disease);
            })
            .catch(error => {
                console.error(error);
                res.status(500).json({ error: 'Failed to retrieve the disease.' });
            });
    } else {
        // Retrieve all diseases
        Disease.find()
            .then(diseases => {
                res.json(diseases);
            })
            .catch(error => {
                console.error(error);
                res.status(500).json({ error: 'Failed to retrieve diseases.' });
            });
    }
});

// Delete a disease by ID
router.delete('/', (req, res) => {
    const diseaseId = req.query.id;

    Disease.findByIdAndDelete(diseaseId)
        .then(deletedDisease => {
            if (!deletedDisease) {
                return res.status(404).json({ error: 'Disease not found.' });
            }
            res.json({ message: 'Disease deleted successfully.' });
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ error: 'Failed to delete the disease.' });
        });
});

// Update a disease by ID
router.put('/', (req, res) => {
    const diseaseId = req.query.id;
    const { name, description } = req.body;

    Disease.findByIdAndUpdate(diseaseId, { name, description }, { new: true })
        .then(updatedDisease => {
            if (!updatedDisease) {
                return res.status(404).json({ error: 'Disease not found.' });
            }
            res.json(updatedDisease);
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ error: 'Failed to update the disease.' });
        });
});

// Retrieve diseases by symptom
router.get('/', async (req, res) => {
    try {
        const symptomId = req.query.symptom_id;
        const diseases = await Disease.find({ symptoms: symptomId }).exec();

        res.status(200).json(diseases);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to retrieve diseases by symptom.' });
    }
});

// Retrieve diseases by symptom ID
router.get('/', (req, res) => {
    const symptomId = req.query.symptom_id;

    Disease.find({ symptoms: symptomId })
        .then(diseases => {
            res.json(diseases);
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ error: 'Failed to retrieve diseases.' });
        });
});


module.exports = router;
