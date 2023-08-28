const express = require('express');
const bcrypt = require('bcrypt');
const Employee = require('../models/Employee');

const router = express.Router();

// Create a new employee
router.post('/register', (req, res) => {
  const { fullname, phone, email, password, position, company } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);

  const newEmployee = new Employee({
    fullname,
    phone,
    email,
    password: hashedPassword,
    position,
    company
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


router.get('/', (req, res) => {
  const employeeId = req.query.id;
  const companyId = req.query.company_id;
  const officeId = req.query.office_id;

  if (employeeId) {
    // Retrieve an employee by ID
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
  } else if (companyId) {
    // Retrieve employees by company ID
    Employee.find({ company: companyId })
      .then(employees => {
        res.status(200).json(employees);
      })
      .catch(error => {
        console.error(error);
        res.status(500).json({ error: 'Failed to retrieve employees by company ID.' });
      });
  } else if (officeId) {
    // Retrieve employees by office ID
    Employee.find({ office: officeId })
      .then(employees => {
        res.status(200).json(employees);
      })
      .catch(error => {
        console.error(error);
        res.status(500).json({ error: 'Failed to retrieve employees by office ID.' });
      });
  } else {
    // Retrieve all employees if no query provided
    Employee.find()
      .then(employees => {
        res.json(employees);
      })
      .catch(error => {
        console.error(error);
        res.status(500).json({ error: 'Failed to retrieve employees.' });
      });
  }
});

// Update an employee by ID
router.put('/', (req, res) => {
  const employeeId = req.query.id;

  const { fullname, phone, email, position, password } = req.body;

  let promise = null;

  if (password == '') {
    promise = Employee.findByIdAndUpdate(employeeId, { fullname, phone, email, position }, { new: true });
  }
  else {
    const hashedPassword = bcrypt.hashSync(password, 10);
    promise = Employee.findByIdAndUpdate(employeeId, { fullname, phone, email, position, password: hashedPassword }, { new: true });
  }

  promise.then(updatedEmployee => {
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
