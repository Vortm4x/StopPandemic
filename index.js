const express = require('express');
const connectDB = require('./db');
const security = require('./security');

const express = require('express');
const companyRoutes = require('./routes/company');
const employeeRoutes = require('./routes/employee');
const adminRoutes = require('./routes/admin');
const diseaseRoutes = require('./routes/disease');
const symptomRoutes = require('./routes/symptom');
const healthReportRoutes = require('./routes/healthReport');
const attendanceRoutes = require('./routes/attendance');

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
