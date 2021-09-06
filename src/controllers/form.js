import db from "../models";
const fs = require('fs');
const cloudinary = require('../config/cloudinary')


const fetchPayment = (req, res) => {
  db.sequelize
    .query(`SELECT * from signup`)
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

const fetchUserById = (req, res) => {
   const { id } = req.params;
  db.sequelize
    .query(`SELECT * from signup where phone = "${id}"`)
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

const eventList = (req, res) => {
  const {
     eventName,
    venue,
    from,
    to,
    time,
    otherInfo,
    imageUrl,
    theme
  } = req.body
  console.log(req.body)


  db.sequelize
    .query(`SELECT  max(id) + 1 as id from event_list `)
    .then((result) => {
      let maxId = result[0][0].id;
      console.log(maxId);
  
    db.sequelize.query(
      `INSERT INTO event_list (event_name, venue, 
      date_from, date_to, time, other_info, event_picture, theme
 ) VALUES 
      ( "${eventName}","${venue}","${from}",
       "${to}","${time}","${otherInfo}", "${imageUrl}", "${theme}")`)
      .then((results) => {
        res.json({
          status: "success",
          msg : "Event created successfully"
          // result: maxId,
          // results
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ status: "failed", err });
      })  

    })
};


const fetchEventList = (req, res) => {
    const { id } = req.params;
  db.sequelize
    .query(`SELECT * from event_list where group_id = ${id}`)
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


const fetchEventPictures = (req, res) => {
   const { id } = req.params;
  db.sequelize
    .query(`SELECT * from event_pictures where event_name = "${id}"`)
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


const fileUploader =  (req, res) => {
  console.log(req.body)
  console.log(req.files)
  const files = req.files
  const {user, event_name} = req.body
  console.log(JSON.stringify(req.files))
 files.forEach((item) => {
  // db.sequelize
  //   .query(`SELECT  max(id) + 1 as id from event_pictures `)
  //   .then((result) => {
  //     let maxId = result[0][0].id;
  //     console.log(maxId);
 

    db.sequelize.query(
      `INSERT INTO event_pictures ( imageUrl, user, event_name
      
 ) VALUES 
      ( "${item.path}", "${user}", "${event_name}")`)
     .catch((err) => {
        console.log(err);
        res.status(500).json({ status: "failed", err });
      }) 
    })


        res.json({
          status: "success",
          msg : "Event Pictures Posted successfully"
          // result: maxId, 
          // results
          // Hello
        });
      
}

const uploadChildrenImages =  (req, res) => {
   // console.log(req.body)
  // const childName = req.body.childName
  // console.log(childName)
  // const files = req.body.files
  // console.log(files)
  const {user, event_name} = req.body
  console.log(JSON.stringify(req.files))

 // files.forEach((item, index) => {
 //  db.sequelize.query(
 //      `INSERT INTO children_details ( child_image, name_of_child
      
 // ) VALUES 
 //      ( "${item}", "${childName[index]}")`)
 //     .catch((err) => {
 //        console.log(err);
 //        res.status(500).json({ status: "failed", err });
 //      }) 
 //    })

 
}
      

const updateUserProfile = (req, res) => {
  console.log(req.body)
  console.log(req.file)
  const {
    id,
firstName,
lastName,
phone,
email,
password,
address
  } = req.body;
if(req.file === undefined){
 db.sequelize
    .query(
      `UPDATE signup SET firstName = "${firstName}", address = "${address}",
      lastName ="${lastName}", phone = "${phone}",  email = "${email}"
       WHERE id = "${id}"`
    )
    .then((results) => {
      res.json({
        status: "success",
        result: results[0],
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ status: "failed", err });
    });
}
else{
  db.sequelize
    .query(
      `UPDATE signup SET firstName = "${firstName}", address = "${address}",
      lastName ="${lastName}", phone = "${phone}", imageUrl = "${req.file.path}", 
      email = "${email}"
       WHERE id = "${id}"`
    )
    .then((results) => {
      res.json({
        status: "success",
        result: results[0],
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ status: "failed", err });
    });
}
};




export {

fetchPayment,
fetchUserById,   
eventList,
fetchEventList,
fileUploader,
fetchEventPictures,
uploadChildrenImages,
updateUserProfile

} 
