var express = require('express');
var db = require('../db/database.js');
var router = express.Router();


router.get('/', function (req, res) {

    db.query('select username, firstname, lastname from users', function (err, results) {
        if (err) throw err;

        res.render('index', {
            pageTitle: "Home",
            pageID: 'home',
            results: results
        })
        ;
    });


});

module.exports = router;