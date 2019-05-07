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

const createReservations = (req, res, next) => {
    const { reservation_id, is_reserved, reservation_start, reservation_end, hall_id } = req.body;
    
    db.query(
      'INSERT INTO reservations (reservation_id, is_reserved, reservation_start, reservation_end, hall_id) VALUES ($1, $2, $3, $4, $5)',
      [reservation_id, is_reserved, reservation_start, reservation_end, hall_id],
      (err, result) => {
        if (err) {
          return next(err);
        }
        res.status(201).send(result.rows);
      }
    );
  };


module.exports = {
    getReservations,
    getreservationsByid,
    createReservations
}