const Joi = require('joi'); // Import the Joi library for validation

const campgroundSchema = Joi.object({ // Define the schema for the campground data
        campground: Joi.object({ // Define the schema for the campground object
            title: Joi.string().required(), // Title is required and must be a string
            price: Joi.number().required().min(0), // Price is required and must be a number greater than or equal to 0
            //image: Joi.string().required(), // Image is required and must be a string
            location: Joi.string().required(), // Location is required and must be a string
            description: Joi.string().required() // Description is required and must be a string
        }).required(), // The campground object is required
        deleteImages: Joi.array() 
    });

module.exports.campgroundSchema = campgroundSchema; // Export the campground schema


module.exports.reviewSchema = Joi.object({ // Define the schema for the review data     
    review: Joi.object({ // Define the schema for the review object
        body: Joi.string().required(), // Body is required and must be a string
        rating: Joi.number().required().min(1).max(5) // Rating is required and must be a number between 1 and 5
    }).required() // The review object is required
}); // Export the review schema

