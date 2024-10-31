var express = require('express');
var router = express.Router();
let value = 1;
let sum = 1;


/* GET users listing. */
router.get('/', function(req, res, next) {
    value += 2;        // Add two to value
    sum *= value;      // Add updated value to sum
    const responseMessage = `Sum: ${sum}`;

    res.send(responseMessage);
});

module.exports = router;
