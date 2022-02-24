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
      database: process.env.DB_NAME,
    }).promise();
  }

  async query(query, paramsArray) {
    const [rows, fields] = await this._pool.query(query, paramsArray);
    return rows;
  }
}

export default new MySQLConnector();