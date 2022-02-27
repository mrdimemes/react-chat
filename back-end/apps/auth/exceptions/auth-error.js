class AuthError extends Error {
  status;
  errors;

  constructor(massage, status, errors = []) {
    super(massage);
    this.status = status;
    this.errors = errors;
  }

  static UnauthorizedError() {
    return new AuthError(401, "User not authorized");
  }

  static BadRequestError(massage, errors = []) {
    return new AuthError(400, massage, errors);
  }
}


export default AuthError;