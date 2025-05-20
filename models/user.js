const mongoose = require('mongoose'); // Import mongoose
const passportLocalMongoose = require('passport-local-mongoose'); // Import passport-local-mongoose
const Schema = mongoose.Schema; // Get the Schema constructor from mongoose

const UserSchema = new Schema({ // Create a new schema for the user 
    email: 
    {
        type: String, // Email field
        required: true, // Email is required
        unique: true // Email must be unique
    }
});


// Add passport-local-mongoose plugin to the UserSchema
UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', UserSchema); // Export the User model