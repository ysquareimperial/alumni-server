const {upload} =  require("../config/multer.js")
import {
    SignIn,
  SignUp,
  verifyToken
   } 
   from '../controllers/authentication';
  
  module.exports = (app) => {
    app.post('/sign_up',upload.single('file'), SignUp)
    app.post('/sign_in', SignIn)
    app.get('/verify-token', verifyToken)
    // app.post('/sign_up',upload.array('files'), SignUp)
  };