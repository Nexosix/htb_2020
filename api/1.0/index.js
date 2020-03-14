const express = require('express');
const router = express.Router();
 
router.get('/getLeaderboard', require('./getLeaderboard.js'));
router.get('/getViruses', require('./getViruses.js'));

router.get('/setScore', require('./setScore.js'));
 
module.exports = router;