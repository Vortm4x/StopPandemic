const express = require('express');
const path = require('path');

const backendRoutes = require('./routes');
const connectDB = require('./db');
const security = require('./security');

const app = express();

const pages = [
    '/admin/login',
    '/admin/main',
    '/admin/companies',
    '/admin/companies/:id',
    '/admin/employee/:id',
    '/admin/diseases',
    '/admin/new-company',
    '/admin/new-employee',
    '/admin/export-data',
    '/admin/logout',

    '/client/main',
    '/client/login',
    '/client/logout',
    '/client/company',
    '/client/main',
    '/client/health-report',
    '/client/statistics',
    '/',
];

app.use(express.json());
app.use(express.static(path.join(__dirname, '../frontend/build')));

for (let endpoint in backendRoutes) {
    app.use(endpoint, backendRoutes[endpoint]);
}

for(let endpoint in pages) {
    app.get(pages[endpoint], (_req, res) => {
        res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
    });
}


connectDB()
    .then(() => {
        app.listen(security.port, () => {
            console.log(`Server started on port ${security.port}`);
        });
    })
    .catch((err) => {
        console.error('Error connecting to database:', err);
    });