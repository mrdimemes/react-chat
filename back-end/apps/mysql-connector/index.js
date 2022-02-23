import 'dotenv/config';
import mysql from 'mysql2';


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

  query(query, paramsArray) {
    this._pool.query(query, paramsArray, (err, rows) => {
      if (err) {
        throw Error(`SQL error: ${err.sqlMessage}`);
      }
      if (rows) {
        return rows;
      }
    })
  }
}

export default new MySQLConnector();