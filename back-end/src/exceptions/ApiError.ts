import { CustomError } from "./";

class ApiError extends CustomError {
  constructor(status: number, massage: string, errors: object[] | undefined) {
    super(status, massage, errors);
  }

  static BadRequestError(
    massage: string,
    errors: object[] | undefined = undefined
  ) {
    return new ApiError(400, massage, errors);
  }
}

export default ApiError;