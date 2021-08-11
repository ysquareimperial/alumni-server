'use strict';

var cloudinary = require('cloudinary');
var dotenv = require('dotenv');

dotenv.config();

cloudinary.config({
    cloud_name: 'dgha88o7d',
    api_key: '672868481635621',
    api_secret: 'UGtnBP_MLLbMUw3mMCHkPnjo_iU'
});

exports.uploads = function (file, folder) {
    return new Promise(function (resolve) {
        cloudinary.uploader.upload(file, function (result) {
            resolve({
                url: result.url,
                id: result.public_id
            });
        }, {
            resource_type: "auto",
            folder: folder
        });
    });
};