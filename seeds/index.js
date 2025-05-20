const mongoose = require('mongoose');

const Campground = require('../models/campground'); // Import the Campground model
const cities = require('./cities'); // Import the cities data
const { places, descriptors } = require('./seedhelpers'); // Import the seed helpers

mongoose.connect('mongodb://localhost:27017/yelp-camp', {
    useNewUrlParser: true, // Use the new URL parser
    useUnifiedTopology: true // Use the new topology enginne
});

const db = mongoose.connection; // Get the connection object
db.on('error', console.error.bind(console, 'connection error:')); // Log any connection errors
db.once('open', () => { // Once the connection is open
    console.log('Database connected'); // Log a message
}); // Log a message

const sample = array => array[Math.floor(Math.random() * array.length)]; // Function to get a random element from an array

const seedDB = async () => {
    await Campground.deleteMany({}); // Delete all existing campgrounds
    for (let i = 0; i < 50; i++) { // Loop to create 50 campgrounds 
        const random1000 = Math.floor(Math.random() * 1000); // Generate a random number between 0 and 999
        const camp = new Campground({ // Create a new campground instance

            //admin user id - 682c5aa53572661461997ae9
            author: '682c5aa53572661461997ae9', // Set the author ID
            title: `${sample(descriptors)} ${sample(places)}`, // Set the title

            images: [
                
                {
                    url: 'https://res.cloudinary.com/dtbptgzwa/image/upload/v1747756883/YelpCamp/tbugnrpnamkpfsxkkqwx.png',
                    filename: 'YelpCamp/tbugnrpnamkpfsxkkqwx'
                },
                {
                    url: 'https://res.cloudinary.com/dtbptgzwa/image/upload/v1747756880/YelpCamp/qv2pfwgeghjeuefpwavt.png',
                    filename: 'YelpCamp/qv2pfwgeghjeuefpwavt'
                }
            ],
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id leo enim. Phasellus at justo at velit rhoncus elementum nec eget erat. Curabitur ac tortor dictum, ultricies nulla et, imperdiet mauris.', // Set the description
            price: Math.floor(Math.random() * 20) + 10, // Set the price
            location: ` ${cities[random1000].city}, ${cities[random1000].state}`
        });
        await camp.save(); // Save the campground to the database
    }
}
seedDB().then(() => {
    mongoose.connection.close(); // Close the database connection
}
); // Close the database connection