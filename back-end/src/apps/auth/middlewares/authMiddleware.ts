import { Request, Response } from "express";
import { AuthError } from "../exceptions";
import { TokenService } from "../contrillers/services";

function authMiddleware(
  err: Error, req: Request, res: Response, next: Function) {
  try {
    const authHeader = req.headers.authorization;
    if (authHeader === undefined) {
      return next(AuthError.UnauthorizedError());
    }
    const accessToken = authHeader?.split(" ")[1];
    const userData = TokenService.validateAccessToken(accessToken);
    if (!accessToken || !userData) {
      return next(AuthError.UnauthorizedError());
    }
    req.body.user = userData;
    next();
  } catch (e) {
    return next(AuthError.UnauthorizedError());
  }
}

export default authMiddleware;