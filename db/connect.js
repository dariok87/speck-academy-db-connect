const { Pool } = require('pg');

const pool = new Pool({
  user: 'darioke', 
  host: '138.68.87.73',
  database: 'db_darioke', 
  password: 'w#WqSy@7', 
  port: 5432, 
});

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  },
}

