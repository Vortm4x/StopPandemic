const express = require('express');

const backendRoutes = require('./backend/routes');
const connectDB = require('./db');
const security = require('./security');

const app = express();

app.use(express.json());

for(let endpoint in backendRoutes) {
    app.use(endpoint, backendRoutes[endpoint]);
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