const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
  host: "mail.brainstorm.ng",
  port: 465,
  secure: true, // secure:true for port 465, secure:false for port 587
  auth: {
    user: "album-support@brainstorm.ng",
    pass: "album_support@@2021",
    // user: "pharmpay-support@brainstorm.ng",
    // pass: "!Bits_1234567890",
  },
  tls: {
    rejectUnauthorized: false,
  },
});

module.exports = transport;
