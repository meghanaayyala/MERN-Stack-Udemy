if(process.env.NODE_ENV !== "production") { // Check if the environment is not production
    require('dotenv').config(); // Load environment variables from .env file
} // Load environment variables from .env file





// Import required modules
const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate'); // Import the ejs-mate engine
const methodOverride = require('method-override');
const ExpressError = require('./utils/ExpressError'); // Import the ExpressError utility
const session = require('express-session'); // Import the express-session middleware
const flash = require('connect-flash'); // Import the connect-flash middleware
const passport = require('passport'); // Import the passport middleware 
const LocalStrategy = require('passport-local'); // Import the local strategy for passport  
const User = require('./models/user'); // Import the User model



const campgroundRoutes = require('./routes/campgrounds'); // Import the campgrounds routes
const reviewRoutes = require('./routes/reviews'); // Import the reviews routes
const userRoutes = require('./routes/users'); // Import the users routes





mongoose.connect('mongodb://localhost:27017/yelp-camp', {
    useNewUrlParser: true, // Use the new URL parser
    useUnifiedTopology: true, // Use the new topology enginne
});

const db = mongoose.connection; // Get the connection object
db.on('error', console.error.bind(console, 'connection error:')); // Log any connection errors
db.once('open', () => { // Once the connection is open
    console.log('Database connected'); // Log a message
}); // Log a message


app.engine('ejs', ejsMate); // Use ejs-mate as the template engine
app.set('view engine', 'ejs'); // Set the view engine to ejs 
app.set('views', path.join(__dirname, 'views')); // Set the views directory to the views folder


app.use(methodOverride('_method')); // Middleware to override HTTP methods
app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded data
app.use(express.static(path.join(__dirname, 'public')));// Serve static files from the public directory


const sessionConfig = { // Configuration for the session
    secret: 'thisshouldbeafixedsecret', // Secret key for signing the session ID cookie     
    resave: false, // Don't save session if unmodified
    saveUninitialized: true, // Save uninitialized sessions
    cookie: { // Cookie options
        httpOnly: true, // Prevent client-side JavaScript from accessing the cookie
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7, // Set the cookie to expire in 7 days
        maxAge: 1000 * 60 * 60 * 24 * 7 // Set the maximum age of the cookie to 7 days
    }
};
app.use(session(sessionConfig)); // Use the session middleware with the configuration
app.use(flash()); // Use the flash middleware for flash messages


app.use(passport.initialize()); // Initialize passport
app.use(passport.session()); // Use passport sessions
passport.use(new LocalStrategy(User.authenticate())); // Use the local strategy for authentication

passport.serializeUser(User.serializeUser()); // Serialize the user
passport.deserializeUser(User.deserializeUser()); // Deserialize the user



app.use((req, res, next) => { // Middleware

    res.locals.currentUser = req.user; // Set the current user in the response locals
    res.locals.success = req.flash('success'); // Set success messages
    res.locals.error = req.flash('error'); // Set error messages
    next(); // Call the next middleware function
}
);







app.use('/campgrounds', campgroundRoutes); // Use the campgrounds routes for all requests to /campgrounds
app.use('/campgrounds/:id/reviews', reviewRoutes); // Use the reviews routes for all requests to /campgrounds/:id/reviews
app.use('/', userRoutes); // Use the users routes for all requests to /users





app.get('/', (req, res) => {
    res.render('home');
}
);

app.all(/(.*)/, (req, res, next) => {
    const err = new ExpressError('Page Not Found', 404); // Create a new error with the message 'Not Found'
    next(err); // Pass the error to the next middleware function
}
);
app.use((err,req,res,next) => {
    const { statusCode = 500 } = err; // Get the status code from the error or set it to 500
    if (!err.message) err.message = 'Oh No, Something Went Wrong!'; // If the error message is not set, set it to a default message
    res.status(statusCode).render('error',{err}); // Render the error view for 404 errors
}
);
app.listen(3600, () => {    
    console.log('Server is running on port 3600');
}
);
