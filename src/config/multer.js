// var multer  = require('multer')
// var upload = multer().single('avatar')
import multer   from 'multer'
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');


// var storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'uploads')
//     // cb(null, '/config')
//   },

//   // destination: '/tmp/my-uploads', .single('avatar')

//   filename: function (req, file, cb) {
//     cb(null, Date.now() + '-' + file.originalname)
//   }
// })
 



const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'edgewood:stage',
    // format: 'png', // supports promises as well
    format : (req, file) => {
    	if(file.mimetype === 'image/jpeg'){
    		return 'jpg'
    	}
    	else if (file.mimetype === 'image/png'){
    		return 'png'
    	}
    },
    public_id: (req, file) => file.originalname,
  },
});


const blogImages = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'edgewood:stage/blog',
    format: 'png', // supports promises as well

    public_id: (req, file) => file.originalname,
  },
});

var upload = multer({ storage: storage })


// module.exports = {
// 	upload
// }

exports.upload = upload;
// exports.companyLogoStorage = multer({ storage: companyLogoStorage });
exports.blogImages = multer({ storage: blogImages });