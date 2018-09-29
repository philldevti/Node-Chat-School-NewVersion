var mongoose = require('mongoose');
//var passportLocalMongoose = require('passport-local-mongoose');

var User = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

// User.plugin(passportLocalMongoose, {
//    usernameField: 'email' 
// });

module.exports = mongoose.model('User',User);