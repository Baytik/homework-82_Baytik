const express = require('express');
const Track = require('../models/Track');

const router = express.Router();

router.get('/', async (req, res) => {
    const tracks = await Track.find();
    res.send(tracks)
});

router.post('/', async (req, res) => {
    const object = {
        title: req.body.title,
        duration: req.body.duration,
        album: req.body.album
    };
    const track = new Track(object);
    try {
        await track.save();
        return res.send(track);
    } catch (e) {
        res.status(400).send(e);
    }
});

module.exports = router;