const db = require("../../db/connect");

const getHalls = (req, res, next) => {
  db.query(
    "SELECT * FROM halls", (err, result) => {
    if (err) {
      return  next(err);
    } 
    res.status(200).send(result.rows);
  });
};

const getHallByid = (req, res, next) => {
  const hall_id = req.params.id;
  
  db.query(
    'SELECT * from halls where hall_id = $1', [hall_id], (err, result) => {
    if (err) {
      return next(err);
    }
    res.status(200).send(result.rows);
  });
};

const createHall = (req, res, next) => {
  const { hall_id, name, address, reservation, capacity } = req.body;
  
  db.query(
    'INSERT INTO halls (hall_id, name, address, reservation, capacity) VALUES ($1, $2, $3, $4, $5)',
    [hall_id, name, address, reservation, capacity],
    (err, result) => {
      if (err) {
        return next(err);
      }
      res.status(201).send(result.rows);
    }
  );
};

const updateHall = (req, res, next) => {
  const hall_id = req.params.id;
  const { name, address, reservation, capacity } = req.body;
  
  db.query(
    'UPDATE halls SET name = $1, address = $2, reservation = $3, capacity = $4 WHERE hall_id = $5',
    [name, address, reservation, capacity, hall_id],
    (err, results) => {
      if (err) {
        throw err;
      }
      res.status(200).send(results.rows);
    }
  );
};

const deleteHall = (req, res, next) => {
  const hall_id = req.params.id;
  
  db.query(
    'DELETE FROM halls WHERE hall_id = $1', [hall_id], (err, results) => {
    if (err) {
      throw err;
    }
    res.status(200).send(results.rows);
  });
};

module.exports = {
  getHalls,
  getHallByid,
  createHall,
  updateHall,
  deleteHall
}
