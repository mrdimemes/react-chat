import AuthError from "../exceptions/auth-error.js";
import tokenService from "../contrillers/services/token-service.js";

function authMiddleware(err, req, res, next) {
  try {
    const authHeader = req.headers.authorization;
    const accessToken = authHeader.split(" ")[1];
    const userData = tokenService.validateAccessToken(accessToken);
    if (!authHeader || !accessToken || !userData) {
      return next(AuthError.UnauthorizedError());
    }
    req.user = userData;
    next();
  } catch (error) {
    return next(AuthError.UnauthorizedError());
  }
}


export default authMiddleware;