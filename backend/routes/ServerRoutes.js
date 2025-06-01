const express = require('express');

const router = express.Router();

router.get('/', (req, res)=>{
    res.json({
        msg: "get all servers"
    })
});

module.exports = router;