import {
   
   fetchPayment,
   fetchUserById
   // uploadMulterImage

 } 
 from '../controllers/form';

module.exports = (app) => {
  
 
   app.get('/fetch_users', fetchPayment)
   app.get('/fetch_user_id/:id', fetchUserById)
   
  
};
