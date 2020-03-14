const express = require('express');
const router = express.Router();
 
router.get('/getLeaderboard', require('./getLeaderboard.js'));
router.get('/getViruses', require('./getViruses.js'));

router.post('/setScore', require('./setScore.js'));
 
module.exports = router;