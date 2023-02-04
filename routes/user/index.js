const express = require('express');
const router = express.Router();
const path = require('path');

const databasePath = '../../routes/database/index.json';

router.get('/selim', (req, res) => {
    res.send(require(path.resolve(__dirname, databasePath)));
});

module.exports = router;