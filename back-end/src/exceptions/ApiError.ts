import { CustomError } from "./";

class ApiError extends CustomError {
  constructor(status: number, massage: string, errors = []) {
    super(status, massage, errors);
  }

  static BadRequestError(massage: string, errors = []) {
    return new ApiError(400, massage, errors);
  }
}

export default ApiError;