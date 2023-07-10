const express = require('express');
const HealthReport = require('../models/health_report');

const router = express.Router();

// Create a new health report
router.post('/add', (req, res) => {
    const { date, disease, seekEmployees, company } = req.body;

    const newHealthReport = new HealthReport({
        date,
        disease,
        seekEmployees,
        company
    });

    newHealthReport.save()
        .then(savedReport => {
            res.status(201).json(savedReport);
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ error: 'Failed to create the health report.' });
        });
});

// Retrieve health reports by date, disease, and company ID
router.get('/', (req, res) => {
    const { date, disease, company_id } = req.query;

    if (!company_id) {
        return res.status(400).json({ error: 'Company ID is required.' });
    }

    const query = {
        company: company_id
    };

    if (date) {
        query.date = date;
    }

    if (disease) {
        query.disease = disease;
    }

    HealthReport.find(query)
        .then(reports => {
            res.json(reports);
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ error: 'Failed to retrieve health reports.' });
        });
});


// Delete health reports by date and/or disease
router.delete('/', (req, res) => {
    const { date, disease, company_id } = req.query;

    if (!company_id) {
        return res.status(400).json({ error: 'Company ID is required.' });
    }

    const query = {
        company: company_id
    };

    if (date) {
        query.date = date;
    }

    if (disease) {
        query.disease = disease;
    }

    HealthReport.deleteMany(query)
        .then(deletedReports => {
            res.json({ message: 'Health reports deleted successfully.' });
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ error: 'Failed to delete health reports.' });
        });
});

// Update a health report by disease and date
router.put('/', (req, res) => {
    const { disease, date, seekEmployees, company } = req.body;

    HealthReport.findOneAndUpdate({ disease, date, company }, { seekEmployees }, { new: true })
        .then(updatedReport => {
            if (!updatedReport) {
                return res.status(404).json({ error: 'Health report not found.' });
            }
            res.json(updatedReport);
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ error: 'Failed to update the health report.' });
        });
});

// Update a health report
router.patch('/', (req, res) => {
    const { date, employeeId, disease, seek, company } = req.body;

    HealthReport.findOne({ date, disease, company })
        .then(report => {
            if (!report) {
                return res.status(404).json({ error: 'Health report not found.' });
            }

            if (seek) {
                // Add employeeId to seekEmployees array if it doesn't already exist
                if (!report.seekEmployees.includes(employeeId)) {
                    report.seekEmployees.push(employeeId);
                }
            } else {
                // Remove employeeId from seekEmployees array if it exists
                const index = report.seekEmployees.indexOf(employeeId);
                if (index > -1) {
                    report.seekEmployees.splice(index, 1);
                }
            }

            // Save the updated health report
            report.save()
                .then(updatedReport => {
                    res.json(updatedReport);
                })
                .catch(error => {
                    console.error(error);
                    res.status(500).json({ error: 'Failed to update the health report.' });
                });
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ error: 'Failed to retrieve the health report.' });
        });
});

module.exports = router;
