const express = require('express');
const router = express.Router();
const { addObject, getAllObjects } = require('./service');

router.post('/post', async (req, res) => {
    try {
        const savedUser = await addObject(req.body);
        res.status(201).json(savedUser);
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ error: error.message });
    }
});

router.get('/get', async (req, res) => {
    try {
        const objects = await getAllObjects();
        res.status(200).json(objects);
    } catch (error) {
        console.error("Error fetching objects:", error);
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
