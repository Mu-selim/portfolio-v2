const express = require('express');
const router = express.Router();
const path = require('path');

const databasePath = '../../../routes/database/index.json';
const database = require(path.resolve(__dirname, databasePath));

router.get('/metadata', (req, res) => {
    res.send(database.metadata);
});

router.get('/main', (req, res) => {
    res.send(database.main);
});

router.get('/about', (req, res) => {
    res.send(database.about);
});

router.get('/experience', (req, res) => {
    res.send(database.experience);
});

router.get('/projects', (req, res) => {
    res.send(database.projects);
});

module.exports = router;