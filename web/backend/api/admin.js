const express = require('express');
const Admin = require('../models/Admin');

const router = express.Router();

// Register a new admin
router.post('/register', (req, res) => {
    const admin = new Admin(req.body);

    admin.save()
        .then(savedAdmin => {
            res.status(201).json(savedAdmin);
        })
        .catch(error => {
            res.status(400).json({ message: 'Failed to create the admin.' });
        });
});

router.post('/login', (req, res) => {
    
    
});

// Get all admins
router.get('/', (req, res) => {
    Admin.find()
        .then(admins => {
            res.status(200).json(admins);
        })
        .catch(error => {
            res.status(500).json({ message: 'Failed to retrieve admins.' });
        });
});

// Retrieve admins by assignee ID
router.get('/admin', (req, res) => {
    const assigneeId = req.query.assignee_id;

    Admin.find({ assignee: assigneeId })
        .then(admins => {
            if (admins.length === 0) {
                return res.status(404).json({ error: 'Admins not found' });
            }
            res.status(200).json(admins);
        })
        .catch(error => {
            res.status(500).json({ error: 'Failed to retrieve admins.' });
        });
});

// Delete an admin by ID
router.delete('/', (req, res) => {
    const adminId = req.query.id;

    Admin.findByIdAndDelete(adminId)
        .then(deletedAdmin => {
            if (!deletedAdmin) {
                return res.status(404).json({ error: 'Admin not found.' });
            }
            res.status(200).json(deletedAdmin);
        })
        .catch(error => {
            res.status(500).json({ message: 'Failed to delete the admin.' });
        });
});

// Update an admin by ID
router.put('/', (req, res) => {
    const adminId = req.query.id;

    Admin.findByIdAndUpdate(adminId, req.body, { new: true })
        .then(updatedAdmin => {
            if (!updatedAdmin) {
                return res.status(404).json({ error: 'Admin not found.' });
            }
            res.status(200).json(updatedAdmin);
        })
        .catch(error => {
            res.status(400).json({ message: 'Failed to update the admin.' });
        });
});

// Get an admin by ID
router.get('/', (req, res) => {
    const adminId = req.query.id;

    Admin.findById(adminId)
        .then(admin => {
            if (!admin) {
                return res.status(404).json({ error: 'Admin not found.' });
            }
            res.status(200).json(admin);
        })
        .catch(error => {
            res.status(400).json({ message: 'Failed to retrieve admin.' });
        });
});

module.exports = router;
