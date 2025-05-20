const mongoose = require('mongoose');
const reviews = require('./review');
const { authorize } = require('passport');
const Schema = mongoose.Schema; // Create a new schema instance for easy access



// https://res.cloudinary.com/douqbebwk/image/upload/w_300/v1600113904/YelpCamp/gxgle1ovzd2f3dgcpass.png 

const ImageSchema = new Schema({
    url: String,
    filename: String
});

ImageSchema.virtual('thumbnail').get(function () {
    return this.url.replace('/upload', '/upload/w_200');
});

const campgroundSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    images: [ImageSchema],
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User' // Reference to the User model
    },
    reviews : [{
        type: Schema.Types.ObjectId,
        ref: 'Review' // Reference to the Review model
    }],
});

// Middleware to delete reviews when a campground is deleted
// Query middleware to delete reviews when a campground is deleted
campgroundSchema.post('findOneAndDelete', async function (doc) {
    if (doc) {
        await reviews.deleteMany({
            _id: {
                $in: doc.reviews // Delete all reviews associated with the campground
            }
        });
    }
});

module.exports = mongoose.model('Campground', campgroundSchema); // Export the model
