const express = require('express');

const router = express.Router();

router.get('/', require('./../../services/login'));
router.post('/', require('./../../services/login/login'));

module.exports = router;