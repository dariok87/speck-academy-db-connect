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

const getUsersByid = (req, res, next) => {
  const user_id = req.params.id;
  
  db.query(
    'SELECT * from users where user_id = $1', [user_id], (err, result) => {
    if (err) {
      return next(err);
    }
    res.status(200).send(result.rows);
  });
};

const updateUser = (req, res, next) => {
  const user_id = req.params.id;
  const { username, email, users_password, status } = req.body;
  
  db.query(
    'UPDATE users SET username = $1, email = $2, users_password = $3, status = $4 WHERE user_id = $5',
    [username, email, users_password, status, user_id],
    (err, results) => {
      if (err) {
        throw err;
      }
      res.status(200).send(results.rows);
    }
  );
};

module.exports = {
    getUsers,
    createUser,
    getUsersByid,
    updateUser
}