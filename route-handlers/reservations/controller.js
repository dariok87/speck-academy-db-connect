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

  const getreservationsByid = (req, res, next) => {
    const reservation_id = req.params.id;
    
    db.query(
      'SELECT * from reservations where reservation_id = $1', [reservation_id], (err, result) => {
      if (err) {
        return next(err);
      }
      res.status(200).send(result.rows);
    });
  };

  module.exports = {
      getReservations,
      getreservationsByid
  }