import {
   
   fetchPayment,
   fetchUserById,
   eventList
   // uploadMulterImage

 } 
 from '../controllers/form';

module.exports = (app) => {
  
 
   app.get('/fetch_users', fetchPayment)
   app.post('/post_event', eventList)
   app.get('/fetch_user_id/:id', fetchUserById)
   
  
};
