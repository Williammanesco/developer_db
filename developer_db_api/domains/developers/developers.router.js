const express = require('express');
require('express-async-errors'); //error handlers com async/await

const router = express.Router();
const developerController = require('./developers.controller');

// routes

router.get("/", async (req, res) => {
    res.status(200).json(await developerController.find(req));
});

router.get("/:id", async (req, res) => {
    res.status(200).json(await developerController.findById(req))
});

router.post("/", async (req, res) => {
    res.status(201).json(await developerController.create(req))
});

router.put("/:id", async (req, res) => {
    res.status(200).json(await developerController.update(req))
});

router.delete("/:id", async (req, res) => {
    res.status(200).json(await developerController._delete(req))
});

module.exports = router;