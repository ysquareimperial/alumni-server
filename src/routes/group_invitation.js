const {upload, blogImages} = require('../config/multer.js')
import {
   
   SendInvitation

 } 
 from '../controllers/group_invitation';

module.exports = (app) => {
  
 
   app.post('/send_mail', SendInvitation)
   // app.post('/update_user_profile', upload.single('file'), updateUserProfile)   
   
  
};
   