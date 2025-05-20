const mongoose = require('mongoose');



const reviewSchema = new mongoose.Schema({ // Define the schema for the review data
    body: String, // Body of the review
    rating: Number, // Rating of the review 
    author: { // Author of the review
        type: mongoose.Schema.Types.ObjectId, // Type of the author field
        ref: 'User' // Reference to the User model
    },
});

module.exports = mongoose.model('Review', reviewSchema); // Export the Review model