const express = require('express');
const router = express.Router();

const Server = require('../Model/ServerModel');

// GET all servers
router.get('/', async (req, res) => {
    try {
        const servers = await Server.find();
        res.json(servers);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

//create new server
router.post('/', async (req, res) => {
    try {
        const newServer = new Server(req.body);
        const saved = await newServer.save();
        res.status(201).json(saved);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// GET all server region names
router.get('/regions', async (req, res) => {
    try {
        const regions = await Server.find({}, 'settings.region');
        const regionList = regions.map(s => s.settings.region);
        res.json(regionList);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// GET: get regionsData by region name
router.get('/region/:regionName', async (req, res) => {
  try {
    const region = req.params.regionName;
    const servers = await Server.find({ 'settings.region': region });
    res.json(servers);
  } catch (err) {
    res.status(500).json({ error: 'Server Error' });
  }
});

module.exports = router;