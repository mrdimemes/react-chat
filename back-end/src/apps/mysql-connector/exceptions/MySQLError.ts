import { CustomError } from "../../../exceptions";
import { QueryError as MySQLQueryError } from "mysql2/promise";

class MySQLError extends CustomError {
  constructor(
    status: number,
    code: string,
    massage: string,
    errors?: Error,
    queryError?: MySQLQueryError
  ) {
    super(status, code, massage, errors);
    if (queryError?.code) this.code = queryError.code
  }

  static QueryError(queryError: MySQLQueryError) {
    return new MySQLError(500, "QUERY_ERR", "MySQL query failed.", queryError);
  }

  static ConnectionError(massage: string, errors: Error) {
    return new MySQLError(
      500, "CONNECTION_ERR", "MySQL connection error. " + massage, errors);
  }
}

export default MySQLError;