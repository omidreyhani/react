var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.json([{
        id:1,
        username:"smaple1"
    },
        {
            id:2,
            username:"sample2"

        }
    ]);
});

module.exports = router;
