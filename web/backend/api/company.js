const express = require('express');
const Company = require('../models/Company');

const router = express.Router();

// Create a new company
router.post('/register', (req, res) => {
  const { name, creationDate, description, address } = req.body;

  const newCompany = new Company({
    name,
    creationDate,
    description,
    address
  });

  newCompany
    .save()
    .then(savedCompany => {
      res.status(201).json(savedCompany);
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ error: 'Failed to create the company.' });
    });
});

// Retrieve all companies
router.get('/', (req, res) => {
  const companyId = req.query.id;

  if (companyId) {
    // If company ID is provided in query, retrieve a single company by ID
    Company.findById(companyId)
      .then(company => {
        if (!company) {
          return res.status(404).json({ error: 'Company not found.' });
        }
        res.json(company);
      })
      .catch(error => {
        console.error(error);
        res.status(500).json({ error: 'Failed to retrieve the company.' });
      });
  } else {
    // If no company ID provided, retrieve all companies
    Company.find()
      .then(companies => {
        res.json(companies);
      })
      .catch(error => {
        console.error(error);
        res.status(500).json({ error: 'Failed to retrieve companies.' });
      });
  }
});

// Update a company by ID
router.put('/', (req, res) => {
  const companyId = req.query.id;
  const { name, creationDate, description, address } = req.body;

  Company.findByIdAndUpdate(companyId, { name, creationDate, description, address }, { new: true })
    .then(updatedCompany => {
      if (!updatedCompany) {
        return res.status(404).json({ error: 'Company not found.' });
      }
      res.json(updatedCompany);
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ error: 'Failed to update the company.' });
    });
});

// Delete a company by ID
router.delete('/', (req, res) => {
  const companyId = req.query.id;

  Company.findByIdAndDelete(companyId)
    .then(deletedCompany => {
      if (!deletedCompany) {
        return res.status(404).json({ error: 'Company not found.' });
      }
      res.json({ message: 'Company deleted successfully.' });
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ error: 'Failed to delete the company.' });
    });
});

module.exports = router;