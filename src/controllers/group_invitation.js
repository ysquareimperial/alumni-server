import db from "../models";
import {adminInvite} from "../services/group_invitation_message"
const transport = require("../config/nodemailer");


const SendInvitation = (req, res) => {
console.log(req.body)
const {emailAddress, groupLink } = req.body
	transport
      .sendMail({
        from : '"PharmPay" <pharmpay-support@brainstorm.ng>',
        // from: '"AlbumSupport" <album-support@brainstorm.ng>',
        to: emailAddress,
        subject: `[AlbumSupport] Group Invitation`,
        html: adminInvite(groupLink),
      })
      .then((info) => {
        res.json({
          info
        })
        // console.log("Message sent: %s", info.messageId);
        console.log("Message sent: %s");
      })
      .catch((err) => {
        res.json({
          err
        })
        console.log("Error", err)
      });
}



export {
	SendInvitation
}