const express = require('express');
const router = express.Router();
 
router.use('/1.0', require('./1.0'));
 
module.exports = router;