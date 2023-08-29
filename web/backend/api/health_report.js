const express = require('express');
const HealthReport = require('../models/HealthReport');
const Employee = require('../models/Employee');
const Disease = require('../models/Disease');
const Company = require('../models/Company');

const router = express.Router();

// Add a new health report
router.post('/add', async (req, res) => {
    try {
      const { date, employeeId, diseaseId, companyId } = req.body;
  
      // Check if the employee exists
      const employee = await Employee.findById(employeeId);
      if (!employee) {
        return res.status(400).json({ error: 'Employee not found.' });
      }
  
      // Check if the disease (if provided) exists
      let disease = null;
      if (diseaseId) {
        disease = await Disease.findById(diseaseId);
        if (!disease) {
          return res.status(400).json({ error: 'Disease not found.' });
        }
      }
  
      // Check if the company exists
      const company = await Company.findById(companyId);
      if (!company) {
        return res.status(400).json({ error: 'Company not found.' });
      }
  
      // Create a new health report
      const newReport = new HealthReport({
        date,
        employee: employeeId,
        disease: diseaseId,
        company: companyId,
      });
  
      const savedReport = await newReport.save();
      res.status(201).json(savedReport);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to add the health report.' });
    }
  });
  
  router.get('/', async (req, res) => {
    try {
      const { date, diseaseId, companyId } = req.query;
  
      // Find the disease by ID
      const disease = await Disease.findById(diseaseId);
      if (!disease) {
        return res.status(404).json({ error: 'Disease not found.' });
      }
  
      // Get the total number of employees in the company
      const totalEmployees = await Employee.countDocuments({ company: companyId });
  
      // Get the number of employees that reported the disease on the given date
      const reportedEmployees = await HealthReport.countDocuments({
        disease: diseaseId,
        date: new Date(date),
      });
  
      res.json({
        totalEmployees,
        reportedEmployees,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to fetch health report statistics.' });
    }
  });
  

  // Delete a health report by ID
router.delete('/', async (req, res) => {
    const reportId = req.query.id;
  
    try {
      const deletedReport = await HealthReport.findByIdAndDelete(reportId);
      if (!deletedReport) {
        return res.status(404).json({ error: 'Health report not found.' });
      }
      res.json({ message: 'Health report deleted successfully.' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to delete the health report.' });
    }
  });
  

module.exports = router;
