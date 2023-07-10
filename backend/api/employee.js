const express = require('express');
const Employee = require('../models/employee');

const router = express.Router();

// Create a new employee
router.post('/register', (req, res) => {
  const { name, phone, email, password, position, accessLevel, companyId } = req.body;

  const newEmployee = new Employee({
    name,
    phone,
    email,
    password,
    position,
    accessLevel,
    companyId
  });

  newEmployee.save()
    .then(savedEmployee => {
      res.status(201).json(savedEmployee);
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ error: 'Failed to create the employee.' });
    });
});


// Retrieve all employees
router.get('/', (req, res) => {
  Employee.find()
    .then(employees => {
      res.json(employees);
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ error: 'Failed to retrieve employees.' });
    });
});

// Retrieve an employee by ID
router.get('/', (req, res) => {
  const employeeId = req.query.id;

  Employee.findById(employeeId)
    .then(employee => {
      if (!employee) {
        return res.status(404).json({ error: 'Employee not found.' });
      }
      res.json(employee);
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ error: 'Failed to retrieve the employee.' });
    });
});

// Retrieve employees by company ID
router.get('/', (req, res) => {
  const companyId = req.query.company_id;

  Employee.find({ company: companyId })
    .then(employees => {
      res.status(200).json(employees);
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ error: 'Failed to retrieve employees by company ID.' });
    });
});

// Retrieve employees by office ID
router.get('/', (req, res) => {
  const officeId = req.query.office_id;

  Employee.find({ office: officeId })
    .then(employees => {
      res.status(200).json(employees);
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ error: 'Failed to retrieve employees by office ID.' });
    });
});

// Update an employee by ID
router.put('/', (req, res) => {
  const employeeId = req.query.id;
  const { name, phone, email, position, accessLevel, companyId } = req.body;

  Employee.findByIdAndUpdate(employeeId, { name, phone, email, position, accessLevel, companyId }, { new: true })
    .then(updatedEmployee => {
      if (!updatedEmployee) {
        return res.status(404).json({ error: 'Employee not found.' });
      }
      res.json(updatedEmployee);
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ error: 'Failed to update the employee.' });
    });
});

// Delete an employee by ID
router.delete('/', (req, res) => {
  const employeeId = req.query.id;

  Employee.findByIdAndDelete(employeeId)
    .then(deletedEmployee => {
      if (!deletedEmployee) {
        return res.status(404).json({ error: 'Employee not found.' });
      }
      res.json({ message: 'Employee deleted successfully.' });
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ error: 'Failed to delete the employee.' });
    });
});

module.exports = router;
