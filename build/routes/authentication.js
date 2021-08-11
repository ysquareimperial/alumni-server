'use strict';

var _authentication = require('../controllers/authentication');

var _require = require("../config/multer.js"),
    upload = _require.upload;

module.exports = function (app) {
  app.post('/sign_up', upload.single('file'), _authentication.SignUp);
  app.post('/sign_in', _authentication.SignIn);
  app.get('/verify-token', _authentication.verifyToken);
  // app.post('/sign_up',upload.array('files'), SignUp)
};