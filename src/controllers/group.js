import db from "../models";
// const fs = require('fs');
// const cloudinary = require('../config/cloudinary')


const fetchGroupById = (req, res) => {
  db.sequelize
    .query(`SELECT * from groups`)
    .then((results) => {
      res.json({
        status: "success",
        result: results[0],
      });

      // console.log(results[0]);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ status: "failed", err });
    });
};


const fetchGroupByIdP = (req, res) => {
  const {id} = req.params
  db.sequelize
    .query(`SELECT * from group_members where member_id = "${id}"`)
    .then((results) => {
      res.json({
        status: "success",
        result: results[0],
      });

      // console.log(results[0]);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ status: "failed", err });
    });
};

const acceptInvitation = (req, res) => {
  console.log(req.body) 
  const {user,
    group_name,
    id} = req.body
  db.sequelize
    .query(`INSERT INTO group_members (group_id, member_id, group_name
) VALUES ("${id}", "${user}", "${group_name}")`)
    .then((results) => {
      res.json({
        status: "success",
        result: results[0],
      });

      // console.log(results[0]);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ status: "failed", err });
    });
}
export {
fetchGroupById,
fetchGroupByIdP,
acceptInvitation
}