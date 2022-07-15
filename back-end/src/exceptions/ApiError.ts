import { CustomError } from "./";

class ApiError extends CustomError {
  constructor(
    status: number, code: string, massage: string, errors?: object[]
  ) {
    super(status, code, massage, errors);
  }

  static BadRequestError(massage: string, errors?: object[]) {
    return new ApiError(400, "BAD_REQUEST_ERR", massage, errors);
  }
}

export default ApiError;