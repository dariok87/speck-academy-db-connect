const db = require("../../db/connect");

const getUsers = (req, res, next) => {
    db.query(
      "SELECT * FROM users", (err, result) => {
      if (err) {
        return  next(err);
      } 
      res.status(200).send(result.rows);
    });
  };

const createUser = (req, res, next) => {
  const { user_id, username, email, users_password, status } = req.body;
  
  db.query(
    'INSERT INTO users (user_id, username, email, users_password, status) VALUES ($1, $2, $3, $4, $5)',
    [user_id, username, email, users_password, status],
    (err, result) => {
      if (err) {
        return next(err);
      }
      res.status(201).send(result.rows);
    }
  );
};

module.exports = {
    getUsers,
    createUser
}