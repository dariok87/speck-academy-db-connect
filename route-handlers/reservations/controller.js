const db = require("../../db/connect");

const getReservations = (req, res, next) => {
    db.query(
      "SELECT * FROM reservations", (err, result) => {
      if (err) {
        return  next(err);
      } 
      res.status(200).send(result.rows);
    });
  };

  module.exports = {
      getReservations
  }