import { CustomError } from "../../../exceptions";

class MySQLError extends CustomError {
  constructor(status: number, massage: string, errors: Array<any> = []) {
    super(status, massage, errors);
  }

  static QueryError(errors: Array<any> = []) {
    return new MySQLError(500, "QueryError.", errors);
  }

  static ConnectionError(massage: string, errors: Array<any> = []) {
    return new MySQLError(500, "ConnectionError: " + massage, errors);
  }
}

export default MySQLError;