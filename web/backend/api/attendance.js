const express = require('express');
const Attendance = require('../models/Attendance');

const router = express.Router();

// Add a new attendance record
router.post('/add', (req, res) => {
    const { date, presentedEmployees, unspecifiedEmployees } = req.body;

    const newAttendance = new Attendance({
        date,
        presentedEmployees,
        unspecifiedEmployees
    });

    newAttendance.save()
        .then(savedAttendance => {
            res.status(201).json(savedAttendance);
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ error: 'Failed to add the attendance record.' });
        });
});

// Retrieve all attendance records
router.get('/', (req, res) => {
    Attendance.find()
        .then(attendanceRecords => {
            res.json(attendanceRecords);
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ error: 'Failed to retrieve attendance records.' });
        });
});

// Delete attendance records by date
router.delete('/', (req, res) => {
    const { date } = req.query;

    Attendance.deleteMany({ date })
        .then(deletedRecords => {
            res.json({ message: 'Attendance records deleted successfully.' });
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ error: 'Failed to delete attendance records.' });
        });
});

// Update attendance records by date
router.put('/', (req, res) => {
    const { date, presentedEmployees, unspecifiedEmployees } = req.body;

    Attendance.findOneAndUpdate({ date }, { presentedEmployees, unspecifiedEmployees }, { new: true })
        .then(updatedRecord => {
            if (!updatedRecord) {
                return res.status(404).json({ error: 'Attendance record not found.' });
            }
            res.json(updatedRecord);
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ error: 'Failed to update attendance records.' });
        });
});

// Get attendance records by date
router.get('/', (req, res) => {
    const { date } = req.query;

    Attendance.findOne({ date })
        .then(attendanceRecord => {
            if (!attendanceRecord) {
                return res.status(404).json({ error: 'Attendance record not found.' });
            }
            res.json(attendanceRecord);
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ error: 'Failed to retrieve attendance record.' });
        });
});


// Retrieve attendance records based on date and office
router.get('/', (req, res) => {
  const { date, office, company } = req.query;

  if (!date && !office && !company) {
    return res.status(400).json({ error: 'At least one of the parameters (date, office, or company) is required.' });
  }

  const query = {};

  if (date) {
    query.date = date;
  }

  if (office) {
    query.office = office;
  }

  if (company) {
    query.company = company;
  }

  Attendance.find(query)
    .then(attendance => {
      res.json(attendance);
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ error: 'Failed to retrieve attendance.' });
    });
});


// Update attendance
router.patch('/', (req, res) => {
    const { date, employee_id, isPresented } = req.body;
  
    Attendance.findOne({ date })
      .then(attendance => {
        if (!attendance) {
          return res.status(404).json({ error: 'Attendance not found.' });
        }
  
        // Remove employee_id from unspecifiedEmployees array if it exists
        const unspecifiedIndex = attendance.unspecifiedEmployees.indexOf(employee_id);
        if (unspecifiedIndex > -1) {
          attendance.unspecifiedEmployees.splice(unspecifiedIndex, 1);
        }
  
        if (isPresented) {
          // Add employee_id to isPresentedEmployees array if it doesn't already exist
          if (!attendance.isPresentedEmployees.includes(employee_id)) {
            attendance.isPresentedEmployees.push(employee_id);
          }
        } else {
          // Remove employee_id from isPresentedEmployees array if it exists
          const presentedIndex = attendance.isPresentedEmployees.indexOf(employee_id);
          if (presentedIndex > -1) {
            attendance.isPresentedEmployees.splice(presentedIndex, 1);
          }
        }
  
        // Save the updated attendance
        attendance.save()
          .then(updatedAttendance => {
            res.json(updatedAttendance);
          })
          .catch(error => {
            console.error(error);
            res.status(500).json({ error: 'Failed to update the attendance.' });
          });
      })
      .catch(error => {
        console.error(error);
        res.status(500).json({ error: 'Failed to retrieve the attendance.' });
      });
  });
  

module.exports = router;
