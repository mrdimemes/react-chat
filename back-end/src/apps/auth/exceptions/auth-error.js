class AuthError extends Error {
  status;
  errors;

  constructor(status, massage, errors = []) {
    super(massage);
    this.status = status;
    this.errors = errors;
  }

  static UnauthorizedError() {
    return new AuthError(401, "User not authorized");
  }
}


export default AuthError;