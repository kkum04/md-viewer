var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'md-viewer' });
});

router.post('/trans', (req, res) => {
  res.send('kkum');
});

module.exports = router;