const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    playerName: {
        type: String,
        isRequired: true
    },

    characterName: {
        type: String,
        isRequired: true
    }
    
});

module.exports = mongoose.model('Player', schema);