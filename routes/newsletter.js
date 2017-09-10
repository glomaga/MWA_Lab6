var express = require('express');
var router = express.Router();
var fs = require("fs");
var path = require("path");
var writeable = fs.createWriteStream(path.join(__dirname, "/subscribers.txt"));


var sess;
/* GET newsletter page. */
router.get('/', function (req, res, next) {
    res.render('newsletter', { title: 'NEWSLETTER', errors: undefined });
});

router.post('/', function (req, res, next) {
    req.assert('femail', "a valid email is required").notEmpty().isEmail();

    var errors = req.validationErrors();
    console.log("ERRROR" + errors);
    if (errors) {
        res.render('newsletter', { title: 'NEWSLETTER', errors: errors });
    }
    else {
        var user = {
            email: req.body.femail
        }
        console.log(user);
        sess = req.session;
        sess.user = user;
        sess.title = 'THANKYOU';

        //save data in the file.
        writeable.write(req.body.femail + "\n");


        console.log(sess);
        res.redirect('thankyou'); ƒ
    }
});

module.exports = router;
