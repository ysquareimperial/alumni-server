import db from "../models";
// const fs = require('fs');
// const cloudinary = require('../config/cloudinary')


const fetchGroupById = (req, res) => {
  const {user_id} = req.params
  db.sequelize
    .query(`SELECT * from group_members where member_id = "${user_id}"`)
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
  const {user_id, group_id} = req.params
  db.sequelize
    .query(`SELECT * from group_members where member_id = "${user_id}" 
      and group_id = ${group_id}`)
    .then((results) => {
      if (results[0].length) {
                        res.json({
        success: true,
        result: results[0],
      })
                    } else {
      res.json({
        success: false,
        result: results[0],
      })
    }

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
db.sequelize.query(`SELECT * from group_members where member_id = "${user}"`)
.then((result) => {
  if (result[0].length) {
                        console.log('already in group')
                        return res.status(400).json({ success: false, 
                          msg: 'already in group' })
                    } else {
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
}).catch((err) => {
  console.log(err)
})
  
}
export {
fetchGroupById,
fetchGroupByIdP,
acceptInvitation
}