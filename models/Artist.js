const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ArtistSchema = new Schema ({
    artist: {
        type: String,
        required: true
    },
    information: {
      type: String,
      required: true
    },
    image: String,
    album: {
      type: Schema.Types.ObjectID,
      ref: 'Album'
    },
});

const Artist = mongoose.model('Artist', ArtistSchema);

module.exports = Artist;