import dotenv from "dotenv";
import { Request, Response } from "express";
import { UserService } from "./services";
import { validationResult } from "express-validator";
import { ApiError, ConfigError } from "../../../exceptions";
import { RegistrationRequestBody, LoginRequestBody, Cookies } from "../types";

dotenv.config();

class UserController {
  jwtRefreshLifetime: number;

  constructor() {
    this.jwtRefreshLifetime = Number(process.env.JWT_REFRESH_LIFETIME) || 30;
  }

  async registration(req: Request, res: Response, next: Function) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        throw ApiError.BadRequestError("Validation error.", errors.array());
      }
      const { name, email, password } = req.body as RegistrationRequestBody;
      const userData = await UserService.registration(name, email, password);
      res.cookie(
        "refreshToken",
        userData?.refreshToken,
        {
          maxAge: this.jwtRefreshLifetime * 24 * 60 * 60 * 1000,
          httpOnly: true
        }
      );
      return res.json(userData);
    } catch (e) {
      if (e instanceof Error) next(e);
    }
  }

  async login(req: Request, res: Response, next: Function) {
    try {
      const { email, password } = req.body as LoginRequestBody;
      const userData = await UserService.login(email, password);
      res.cookie(
        "refreshToken",
        userData?.refreshToken,
        {
          maxAge: this.jwtRefreshLifetime * 24 * 60 * 60 * 1000,
          httpOnly: true
        }
      );
      return res.json(userData);
    } catch (e) {
      if (e instanceof Error) next(e);
    }
  }

  async logout(req: Request, res: Response, next: Function) {
    try {
      const { refreshToken } = req.cookies as Cookies;
      await UserService.logout(refreshToken);
      res.clearCookie("refreshToken");
      return res.json();
    } catch (e) {
      if (e instanceof Error) next(e);
    }
  }

  async activate(req: Request, res: Response, next: Function) {
    try {
      if (process.env.CLIENT_URL === undefined) {
        throw ConfigError.EnvironmentError("CLIENT_URL is undefined.")
      }
      const activationLink = req.params.link;
      await UserService.activation(activationLink);
      res.redirect(process.env.CLIENT_URL);
    } catch (e) {
      if (e instanceof Error) next(e);
    }
  }

  async refresh(req: Request, res: Response, next: Function) {
    try {
      const { refreshToken } = req.cookies as Cookies;
      const userData = await UserService.refresh(refreshToken);
      res.cookie(
        "refreshToken",
        userData?.refreshToken,
        {
          maxAge: this.jwtRefreshLifetime * 24 * 60 * 60 * 1000,
          httpOnly: true
        }
      );
      return res.json(userData);
    } catch (e) {
      if (e instanceof Error) next(e);
    }
  }
}

export default new UserController();