var express = require('express');
var router = express.Router();

router.get('/', require('./find'));

module.exports = router;