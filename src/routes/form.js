const {upload, blogImages} = require('../config/multer.js')
import {
   
   fetchPayment,
   fetchUserById,
   eventList,
   fetchEventList,
   fileUploader
   // uploadMulterImage

 } 
 from '../controllers/form';

module.exports = (app) => {
  
 
   app.get('/fetch_users', fetchPayment)
   app.get('/fetch_event_list', fetchEventList)
   app.post('/post_event', eventList)
   app.get('/fetch_user_id/:id', fetchUserById)
   app.post('/post_images', upload.array('files'), fileUploader)
   
  
};