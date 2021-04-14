const { Router } = require('express');
const Location = require('../models/Location');

module.exports = Router()

    .get('/', (req, res, next) => {
        Location
            .find()
            .then((locations) => res.send(locations))
            .catch(next);
    })

    .post('/', (req, res, next) => {
        Location
            .create(req.body)
            .then((location) => res.send(location))
            .catch(next);

    });
    