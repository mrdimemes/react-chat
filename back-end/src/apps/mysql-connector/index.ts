import dotenv from "dotenv";
import mysql, { Pool, QueryError as MySQLQueryError } from "mysql2/promise";
import { ConfigError } from "../../exceptions";
import { MySQLError } from "./exceptions";

dotenv.config();

const DB_CONNECTION_LIMIT: number | undefined = Number(process.env.DB_CONNECTION_LIMIT);

if (process.env.DB_HOST === undefined) {
  throw ConfigError.EnvironmentError("DB_HOST is undefined.");
}
if (process.env.DB_NAME === undefined) {
  throw ConfigError.EnvironmentError("DB_NAME is undefined.");
}
if (process.env.DB_USER === undefined) {
  throw ConfigError.EnvironmentError("DB_USER is undefined.");
}
if (process.env.DB_PASSWORD === undefined) {
  throw ConfigError.EnvironmentError("DB_PASSWORD is undefined.");
}

class MySQLConnector {
  _pool: Pool;

  constructor() {
    try {
      this._pool = mysql.createPool({
        connectionLimit: DB_CONNECTION_LIMIT,
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
      });
    } catch (e) {
      throw MySQLError.ConnectionError("failed to create pool.", e as Error);
    }
  }

  async query(query: string, paramsArray: Array<string | number | null>) {
    try {
      const [rows, _fields] = await this._pool.query(query, paramsArray);
      return rows;
    } catch (e) {
      throw MySQLError.QueryError(e as MySQLQueryError);
    }
  }
}

export default new MySQLConnector();