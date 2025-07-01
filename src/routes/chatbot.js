// src/routes/chatbot.js
const express = require('express');
const router = express.Router();
const { chatHandler } = require('../controllers/chatbotController');

router.post('/', chatHandler);

module.exports = router;
