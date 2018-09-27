const mongoose = require('mongoose');

const Rooms = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    enable: {
        type: Boolean,
        required: true,
        default: true
    },
    users: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    }],
    created: {
        type: Date,
        required: true,
        default: new Date()
    }
});

module.exports = mongoose.model('Rooms', Rooms);