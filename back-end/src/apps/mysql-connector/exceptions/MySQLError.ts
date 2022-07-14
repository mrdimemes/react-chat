import { CustomError } from "../../../exceptions";
import { QueryError as MySQLQueryError } from "mysql2/promise";

class MySQLError extends CustomError {
  code?: string;

  constructor(
    status: number,
    massage: string,
    errors?: Error,
    queryError?: MySQLQueryError
  ) {
    super(status, massage, errors);
    this.code = queryError?.code;
  }

  static QueryError(queryError: MySQLQueryError) {
    return new MySQLError(500, "MySQL query failed.", queryError);
  }

  static ConnectionError(massage: string, errors: Error) {
    return new MySQLError(500, "MySQL connection error. " + massage, errors);
  }
}

export default MySQLError;