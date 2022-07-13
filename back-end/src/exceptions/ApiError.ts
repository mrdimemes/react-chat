import { CustomError } from "./";

class ApiError extends CustomError {
  constructor(status: number, massage: string, errors: Array<any> = []) {
    super(status, massage, errors);
  }

  static BadRequestError(massage: string, errors: Array<any> = []) {
    return new ApiError(400, massage, errors);
  }
}

export default ApiError;