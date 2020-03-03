const express = require('express');
const Artist = require('../models/Artist');

const router = express.Router();

router.get('/', async (req, res) => {
   const artists = await Artist.find().populate('album');
   res.send(artists);
});

router.post('/', async (req, res) => {
    const object = {
        artist: req.body.artist,
        information: req.body.information,
        image: req.body.image
    };
    const artist = new Artist(object);
    try {
        await artist.save();
        return res.send(artist);
    } catch (e) {
        res.status(400).send(e);
    }
});

module.exports = router;