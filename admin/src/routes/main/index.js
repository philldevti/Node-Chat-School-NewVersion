const express = require('express');
const router = express.Router();
const isLoggedIn = require('./../midleware/isloggedin');

router.get('/', isLoggedIn,  require('./../../services/main'));

module.exports = router;