const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imageFile: {
        imageName: {
            type: String,
            required: true
        },
        imageUrl: {
            type: String,
            required: true
        }
    },
    videoFile: {
        videoName: {
            type: String,
            required: true
        },
        videoUrl: {
            type: String,
            required: true
        }
    }
});

module.exports = mongoose.model('Object', userSchema);
