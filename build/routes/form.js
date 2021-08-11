'use strict';

var _form = require('../controllers/form');

var _require = require('../config/multer.js'),
    upload = _require.upload,
    blogImages = _require.blogImages;

module.exports = function (app) {

  app.get('/fetch_users', _form.fetchPayment);
  app.get('/fetch_event_list', _form.fetchEventList);
  app.post('/post_event', _form.eventList);
  app.get('/fetch_user_id/:id', _form.fetchUserById);
  app.post('/post_images', upload.array('files'), _form.fileUploader);
};