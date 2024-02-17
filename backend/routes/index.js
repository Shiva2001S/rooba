const express = require('express');
const router = express.Router();

const controller = require('../controllers/index');

router.post('/api/login', controller.handleLogin);
router.post('/api/signup', controller.handleSignUp);

module.exports = router;