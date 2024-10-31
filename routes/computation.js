var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  // Check if 'x' is provided in the query, otherwise generate a random number
  const x = req.query.x ? parseFloat(req.query.x) : Math.random();

  // Apply the math functions
  const absResult = Math.abs(x);
  const acosResult = Math.acos(x);
  const sinResult = Math.sin(x);
  const sinhResult = Math.sinh(x);

  // Prepare the response string with each result on a separate line
  const response = Math.abs applied to ${x} is ${absResult}<br> +
                   Math.acos applied to ${x} is ${acosResult}<br> +
                   Math.sin applied to ${x} is ${sinResult}<br> +
                   Math.sinh applied to ${x} is ${sinhResult};
  
  res.send(response);
});

module.exports = router;