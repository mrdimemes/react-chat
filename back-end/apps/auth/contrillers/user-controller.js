import "dotenv/config";
import userService from "./services/user-service.js";
import { validationResult } from "express-validator";
import ApiError from "../../../exceptions/api-error.js";


class UserController {
  async registration(req, res, next) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        throw ApiError.BadRequestError("Validation error", errors.array());
      }
      const { name, email, password, browser } = req.body;
      const userData = await userService.registration(
        name, email, password, browser
      );
      res.cookie(
        "refreshToken",
        userData.refreshToken,
        {
          maxAge: process.env.JWT_REFRESH_LIFETIME * 24 * 60 * 60 * 1000,
          httpOnly: true
        }
      );
      return res.json(userData);
    } catch (error) {
      next(error);
    }
  }

  async login(req, res, next) {
    try {
      const { email, password, browser } = req.body;
      const userData = await userService.login(email, password, browser);
      res.cookie(
        "refreshToken",
        userData.refreshToken,
        {
          maxAge: process.env.JWT_REFRESH_LIFETIME * 24 * 60 * 60 * 1000,
          httpOnly: true
        }
      );
      return res.json(userData);
    } catch (error) {
      next(error);
    }
  }

  async logout(req, res, next) {
    try {
      const { refreshToken } = req.cookies;
      const token = await userService.logout(refreshToken);
      res.clearCookie("refreshToken");
      return res.json();
    } catch (error) {
      next(error);
    }
  }

  async activate(req, res, next) {
    try {
      const activationLink = req.params.link;
      await userService.activation(activationLink);
      res.redirect(process.env.CLIENT_URL);
    } catch (error) {
      next(error);
    }
  }

  async refresh(req, res, next) {
    try {
      const { refreshToken } = req.cookies;
      const userData = await userService.refresh(refreshToken);
      res.cookie(
        "refreshToken",
        userData.refreshToken,
        {
          maxAge: process.env.JWT_REFRESH_LIFETIME * 24 * 60 * 60 * 1000,
          httpOnly: true
        }
      );
      return res.json(userData);
    } catch (error) {
      next(error);
    }
  }
}

export default new UserController();