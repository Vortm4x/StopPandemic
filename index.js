const express = require('express');
const connectDB = require('./db');
const security = require('./security');
const app = express();


connectDB()
    .then(() => {
        app.listen(security.port, () => {
            console.log(`Server started on port ${security.port}`);
        });
    })
    .catch((err) => {
        console.error('Error connecting to database:', err);
    });
