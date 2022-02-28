class ApiError extends Error {
  status;
  errors;

  constructor(status, massage, errors = []) {
    super(massage);
    this.status = status;
    this.errors = errors;
  }

  static BadRequestError(massage, errors = []) {
    return new ApiError(400, massage, errors);
  }
}


export default ApiError;