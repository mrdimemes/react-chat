import 'dotenv/config';
import mysql from 'mysql';

class MySQLConnector {
  _pool;

  constructor() {
    this._pool = mysql.createPool({
      connectionLimit: process.env.DB_CONNECTION_LIMIT,
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
    });
  }

  query(query) {
    this._pool.query(query, (err, rows) => {
      if (err) {
        return console.log(err);
      }
      if (rows) {
        return rows;
      }
    })
  }
}

const connector = new MySQLConnector();
export default connector;