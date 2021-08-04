import db from "../models";


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
  } = req.body


  db.sequelize
    .query(`SELECT  max(id) + 1 as id from event_list `)
    .then((result) => {
      let maxId = result[0][0].id;
      console.log(maxId);
  


   db.sequelize.query(
      `INSERT INTO  event_list (id, event_name, venue, from, to, time, other_info) VALUES 
      ("${maxId}", "${eventName}","${venue}","${from}",
       "${to}","${time}","${otherInfo}")`)
      .then((results) => {
        res.json({
          status: "success",
          result: maxId
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ status: "failed", err });
      })

    })
};

export {

fetchPayment,
fetchUserById,   
eventList

} 
