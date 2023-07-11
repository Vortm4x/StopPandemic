const express = require('express');
const path = require('path');

const backendRoutes = require('./backend/routes');
const connectDB = require('./db');
const security = require('./security');

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, './frontend/build')));

for (let endpoint in backendRoutes) {
    app.use(endpoint, backendRoutes[endpoint]);
}




app.get('/admin/login', (_req, res) => {
    res.sendFile(path.join(__dirname, './frontend/build/index.html'));
});

app.get('/admin/main', (_req, res) => {
    res.sendFile(path.join(__dirname, './frontend/build/index.html'));
});

app.get('/client/login', (_req, res) => {
    res.sendFile(path.join(__dirname, './frontend/build/index.html'));
});

app.get('/client/main', (_req, res) => {
    res.sendFile(path.join(__dirname, './frontend/build/index.html'));
});


connectDB()
    .then(() => {
        app.listen(security.port, () => {
            console.log(`Server started on port ${security.port}`);
        });
    })
    .catch((err) => {
        console.error('Error connecting to database:', err);
    });