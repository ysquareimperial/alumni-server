const {upload, blogImages} = require('../config/multer.js')
import {
fetchGroupById,
fetchGroupByIdP,
acceptInvitation,
CreateGroup
 } 
 from '../controllers/group';

module.exports = (app) => {
   app.get('/fetch_group/:user_id', fetchGroupById)
   app.get('/fetch_groups/:user_id/:group_id', fetchGroupByIdP)
   app.post('/post__acceptamce', acceptInvitation)
   app.post('/create_group', upload.single('file'), CreateGroup)
};
   