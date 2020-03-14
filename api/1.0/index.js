const express = require('express');
const router = express.Router();
 
router.get('/getLeaderboard', require('./getLeaderboard.js'));
 
module.exports = router;