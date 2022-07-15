import { CustomError } from "../../../exceptions";

class UserError extends CustomError {
  causeField?: string;

  constructor(
    status: number,
    code: string,
    massage: string,
    errors?: Error,
    causeField?: string
  ) {
    super(status, code, massage, errors);
    this.causeField = causeField;
  }

  static UserNotFound(message: string = "", errors?: Error) {
    return new UserError(
      500, "NOT_FOUND", "User not found. " + message, errors);
  }

  static UserAddingError(
    message: string = "", errors?: Error, causeField?: string
  ) {
    return new UserError(
      500, "ADDING_ERR", "Failed to add user. " + message, errors, causeField);
  }
}

export default UserError;