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

const updateReservations = (req, res, next) => {
const reservation_id = req.params.id;
const { is_reserved, reservation_start, reservation_end, hall_id } = req.body;

db.query(
    'UPDATE reservations SET is_reserved = $1, reservation_start = $2, reservation_end = $3, hall_id = $4 WHERE reservation_id = $5',
    [is_reserved, reservation_start, reservation_end, hall_id],
    (err, results) => {
    if (err) {
        throw err;
    }
    res.status(200).send(results.rows);
    }
);
};

const deleteReservation = (req, res, next) => {
const reservation_id = req.params.id;

db.query(
    'DELETE FROM reservations WHERE reservation_id = $1', [reservation_id], (err, results) => {
    if (err) {
    throw err;
    }
    res.status(200).send(results.rows);
});
};


module.exports = {
    getReservations,
    getreservationsByid,
    createReservations,
    updateReservations,
    deleteReservation
}