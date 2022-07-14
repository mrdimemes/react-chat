import { CustomError } from "./";

class ApiError extends CustomError {
  constructor(status: number, massage: string, errors?: object[]) {
    super(status, massage, errors);
  }

  static BadRequestError(massage: string, errors?: object[]) {
    return new ApiError(400, massage, errors);
  }
}

export default ApiError;