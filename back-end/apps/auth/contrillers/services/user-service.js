import userController from "./../../../mysql-connector/controllers/user-controller.js";
import { v4 } from "uuid";
import hashService from "./hash-service.js";
import mailService from "./mail-service.js";
import tokenService from "./token-service.js";
import UserDTO from "../../DTOs/user-dto.js";
import ApiError from "../../../../exceptions/api-error.js";
import AuthError from "../../exceptions/auth-error.js";


class UserService {
  _controller;
  _getActivationLink;

  constructor() {
    this._controller = userController;
    this._getActivationLink = v4;
  }

  async generateTokens(user, browser) {
    const userDTO = new UserDTO(user);
    const tokens = tokenService.generateTokens({ ...userDTO });
    await tokenService.saveRefreshToken(
      user.user_id,
      tokens.refreshToken,
      browser
    );
    return { ...tokens, user: userDTO };
  }

  async registration(name, email, password, browser) {
    try {
      const hashPassword = hashService.getHash(password);
      const activationLink = this._getActivationLink();
      await this._controller.addUser(name, email, hashPassword, activationLink);
      await mailService.sendActivationMail(email, activationLink);
      const user = await this._controller.findUserByEmail(email);
      return await this.generateTokens(user[0], browser);
    } catch (error) {
      switch (error.code) {
        case "ER_DUP_ENTRY":
          throw ApiError.BadRequestError("Email already taken");
          break;
        case "ERR_INVALID_ARG_TYPE":
          throw ApiError.BadRequestError("Incorrect input");
          break;
        default:
          throw error;
          break;
      }
    }
  }

  async activation(activationLink) {
    const user = await this._controller.findUserByActivationLink(activationLink);
    if (!user.length) {
      throw ApiError.BadRequestError("Incorrect activation link");
    }
    await this._controller.activateUser(user[0].user_id);
  }

  async login(email, password, browser) {
    const user = await this._controller.findUserByEmail(email);
    if (!user.length || !hashService.checkHash(password, user[0].password)) {
      throw ApiError.BadRequestError("Incorrect email or password");
    }
    return await this.generateTokens(user[0], browser);
  }

  async logout(refreshToken) {
    const token = await tokenService.removeRefreshToken(refreshToken);
  }

  async refresh(refreshToken) {
    if (!refreshToken) {
      throw AuthError.UnauthorizedError();
    }
    const userData = tokenService.validateRefreshToken(refreshToken);
    const tokenInDB = await tokenService.findTokenInDB(refreshToken);
    if (!userData || !tokenInDB.length) {
      throw AuthError.UnauthorizedError();
    }
    const user = await this._controller.findUserById(userData.id);
    return await this.generateTokens(user[0], tokenInDB[0].browser);
  }
}

export default new UserService()