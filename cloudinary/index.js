const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
//const multer = require('multer');

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
    });

    const storage = new CloudinaryStorage({
        cloudinary,
        params: {
            folder: 'YelpCamp', // The name of the folder in Cloudinary
            allowed_formats: ['jpeg', 'png', 'jpg', 'gif'], // Allowed image formats
        },
    });

    module.exports = { 
        cloudinary,
        storage,
        //upload: multer({ storage }), // Create a multer instance with the Cloudinary storage
    };
