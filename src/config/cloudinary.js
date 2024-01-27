//

const cloudinary = require("cloudinary");
cloudinary.config({ 
    cloud_name: 'dix9ew1rg', 
    api_key: '184727153857152', 
    api_secret: process.env.CLOUDINARY_SECRET,
});

module.exports = cloudinary;