var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  sess=req.session;
  res.render('thankyou', { title: 'THANKYOU' ,session: req.session});
});

module.exports = router;
