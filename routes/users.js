var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/12', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
