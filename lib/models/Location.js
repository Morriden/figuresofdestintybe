const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    locationTitle: {
        type: String,
        isRequired: true
    },

    locationImage: {
        type: String,
        isRequired: true
    }
});

module.exports = mongoose.model('Location', schema);
