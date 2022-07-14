import { CustomError } from "../../../exceptions";

class MySQLError extends CustomError {
  constructor(status: number, massage: string, errors: Error) {
    super(status, massage, errors);
  }

  static QueryError(errors: Error) {
    return new MySQLError(500, "MySQL query failed.", errors);
  }

  static ConnectionError(massage: string, errors: Error) {
    return new MySQLError(500, "MySQL connection error. " + massage, errors);
  }
}

export default MySQLError;