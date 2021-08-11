'use strict';

var _multer = require('multer');

var _multer2 = _interopRequireDefault(_multer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cloudinary = require('cloudinary').v2; // var multer  = require('multer')
// var upload = multer().single('avatar')

var _require = require('multer-storage-cloudinary'),
    CloudinaryStorage = _require.CloudinaryStorage;

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


var storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'edgewood:stage',
    // format: 'png', // supports promises as well
    format: function format(req, file) {
      if (file.mimetype === 'image/jpeg') {
        return 'jpg';
      } else if (file.mimetype === 'image/png') {
        return 'png';
      }
    },
    public_id: function public_id(req, file) {
      return file.originalname;
    }
  }
});

var blogImages = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'edgewood:stage/blog',
    format: 'png', // supports promises as well

    public_id: function public_id(req, file) {
      return file.originalname;
    }
  }
});

var upload = (0, _multer2.default)({ storage: storage });

// module.exports = {
// 	upload
// }

exports.upload = upload;
// exports.companyLogoStorage = multer({ storage: companyLogoStorage });
exports.blogImages = (0, _multer2.default)({ storage: blogImages });