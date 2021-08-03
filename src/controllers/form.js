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

export {

fetchPayment,
fetchUserById

} 
