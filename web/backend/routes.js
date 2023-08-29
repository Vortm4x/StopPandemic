const companyRoutes = require('./api/company');
const employeeRoutes = require('./api/employee');
const adminRoutes = require('./api/admin');
const diseaseRoutes = require('./api/disease');
const symptomRoutes = require('./api/symptom');
const healthReportRoutes = require('./api/health_report');
const attendanceRoutes = require('./api/attendance');

module.exports = {
    '/api/company': companyRoutes,
    '/api/employee': employeeRoutes,
    '/api/admin': adminRoutes,
    '/api/disease': diseaseRoutes,
    '/api/symptom': symptomRoutes,
    '/api/health-report': healthReportRoutes,
    '/api/attendance': attendanceRoutes,
}