var express = require('express');
var router = express.Router();
const config = require('../config/config')
/* GET home page. */
router.get('/', function (req, res, next) {
	res.send(config);
});

module.exports = router;
