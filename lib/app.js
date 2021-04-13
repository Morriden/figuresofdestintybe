const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv/config');

app.use(express.json());

app.use('/api/v1/locations', require('./routes/locations'));

app.use(require('./middleware/error'));
app.use(require('./middleware/not-found'));

module.exports = app;
