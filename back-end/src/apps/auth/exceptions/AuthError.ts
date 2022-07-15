import { CustomError } from "../../../exceptions";

class AuthError extends CustomError {
  constructor(status: number, code: string, massage: string) {
    super(status, code, massage);
  }

  static UnauthorizedError() {
    return new AuthError(401, "NOT_AUTHORIZED", "User not authorized");
  }
}

export default AuthError;