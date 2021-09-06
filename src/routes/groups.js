const {upload, blogImages} = require('../config/multer.js')
import {
fetchGroupById,
fetchGroupByIdP,
acceptInvitation
 } 
 from '../controllers/group';

module.exports = (app) => {
   app.get('/fetch_groups', fetchGroupById)
   app.get('/fetch_group/:id', fetchGroupByIdP)
   app.post('/post__acceptamce', acceptInvitation)
};
   