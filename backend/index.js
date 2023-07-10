const express = require('express');
const connectDB = require('./db');
const security = require('./security');

const companyRoutes = require('./api/company');
const employeeRoutes = require('./api/employee');
const adminRoutes = require('./api/admin');
const diseaseRoutes = require('./api/disease');
const symptomRoutes = require('./api/symptom');
const healthReportRoutes = require('./api/health_report');
const attendanceRoutes = require('./api/attendance');

const app = express();

app.use(express.json());

app.use('/api/company', companyRoutes);
app.use('/api/employee', employeeRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/disease', diseaseRoutes);
app.use('/api/symptom', symptomRoutes);
app.use('/api/healthReport', healthReportRoutes);
app.use('/api/attendance', attendanceRoutes);

connectDB()
    .then(() => {
        app.listen(security.port, () => {
            console.log(`Server started on port ${security.port}`);
        });
    })
    .catch((err) => {
        console.error('Error connecting to database:', err);
    });
