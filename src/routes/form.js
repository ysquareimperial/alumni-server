const {upload, blogImages} = require('../config/multer.js')
import {
   
   fetchPayment,
   fetchUserById,
   eventList,
   fetchEventList,
   fileUploader,
   uploadChildrenImages,
   fetchEventPictures,
   updateUserProfile
   // uploadMulterImage

 } 
 from '../controllers/form';

module.exports = (app) => {
  
 
   app.get('/fetch_users', fetchPayment)
   app.get('/fetch_event_list/:id', fetchEventList)
   app.get('/fetch_event_pictures/:id', fetchEventPictures)
   app.post('/post_event', eventList)
   app.get('/fetch_user_id/:id', fetchUserById)
   app.post('/post_images', upload.array('files'), fileUploader)
   app.post('/post_children_images', upload.array('files'), uploadChildrenImages)
   app.post('/update_user_profile', upload.single('file'), updateUserProfile)   
   
  
};
   