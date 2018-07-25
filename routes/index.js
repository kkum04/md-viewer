var express = require('express');
var router = express.Router();
const axios = require('axios');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'md-viewer' });
});

router.post('/trans', (req, res) => {
  res.send('kkum');
});

router.post('/load_md_file', (req, res) => {
  const mdPath = req.body.md_path;

  axios.get(mdPath)
      .then( response => res.send(response.data) )
      .catch( err => {
        res.status(err.response.status);
        res.send(err.response.statusText);
      });
})

module.exports = router;