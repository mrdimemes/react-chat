import { CustomError } from "../../../exceptions";

class TokenError extends CustomError {
  constructor(status: number, code:string, massage: string, errors?: Error) {
    super(status, code, massage, errors);
  }

  static TokenNotFound(message: string = "", errors?: Error) {
    return new TokenError(
      500, "NOT_FOUND", "Token not found. " + message, errors);
  }

  static TokenAddingError(message: string = "", errors?: Error) {
    return new TokenError(
      500, "ADDING_ERR", "Failed to add token. " + message, errors);
  }
}

export default TokenError;