const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    fisrtname: { type: String, required: true },
    lastname: { type: String, required: true },
    birthDate: { type: Date, required: true },
    address: { type: String, required: true },
    missingDate: { type: Date, required: true },
    missingPlace: { type: String, required: true },
    imageUrl: { type: String, required: true },
    userId: { type: String, required: true },
});

module.exports = mongoose.model('Post', postSchema);