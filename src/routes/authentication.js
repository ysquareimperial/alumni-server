import {
    SignIn,
  SignUp,
  verifyToken
   } 
   from '../controllers/authentication';
  
  module.exports = (app) => {
    app.post('/sign_up', SignUp)
    app.post('/sign_in', SignIn)
    app.get('/verify-token', verifyToken)
  };