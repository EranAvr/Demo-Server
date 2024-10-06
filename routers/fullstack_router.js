const express = require('express');
const router = express.Router();

// ----------------------------- GET ----------------------------------------
router.get("/", (req, res) => {
    res.send("<h1>Welcome to SkyTech Fullstack Test Router</h1>");
});


// ----------------------------- POST ----------------------------------------


module.exports = router;
