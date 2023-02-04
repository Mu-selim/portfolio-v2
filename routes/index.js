const express = require('express');
const bodyParser = require('body-parser');

const router  = express.Router();
router.use(bodyParser.json());

router.get('/', (req, res)=> {
    res.render('index.ejs');
});

module.exports = router;