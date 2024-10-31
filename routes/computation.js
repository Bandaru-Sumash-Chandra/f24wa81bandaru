const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    let x = req.query.x ? Number(req.query.x) : Math.random() * 10; 
    if (isNaN(x)) {
        x = Math.random() * 10;
    }

    const fnName = "Math.abs";
    const y = Math.abs(x);
    const response = `${fnName} applied to ${x} is ${y}`;
    res.send(response);
});

module.exports = router;
