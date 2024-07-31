const express = require('express');
const router = express.Router();
const addUser = require("./service");

router.post('/users', async (req, res) => {
    try {
        const savedUser = await addUser(req.body);
        res.status(201).json(savedUser);
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
