const db = require("../../db/connect");

const getHalls = (req, res, next) => {
  db.query("SELECT * FROM halls", (err, result) => {
    if (err) {
      return  next(err);
    } 
    res.status(200).send(result.rows);
  });
};

const getHallByid = (req, res, next) => {
  const hall_id = req.params.id;
  
  db.query('SELECT * from halls where hall_id = $1', [hall_id], (err, result) => {
    if (err) {
      return next(err);
    }
    res.status(200).send(result.rows);
  });
};

module.exports = {
  getHalls,
  getHallByid
}
