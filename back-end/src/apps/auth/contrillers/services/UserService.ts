import UserController from "../mysql/UserController";
import { v4 } from "uuid";
import { HashService, MailService, TokenService } from "./";
import { UserDTO } from "../../DTOs";
import { ApiError } from "../../../../exceptions";
import { AuthError, TokenError, UserError } from "../../exceptions";


class UserService {
  _controller;
  _generateActivationLink;

  constructor() {
    this._controller = UserController;
    this._generateActivationLink = v4;
  }

  async generateTokens(user: UserDTO, oldToken?: string) {
    const tokens = TokenService.generateTokens({ ...user });
    await TokenService.saveRefreshToken(
      user.id, tokens.refreshToken, oldToken);
    return { ...tokens, user };
  }

  async registration(name: string, email: string, password: string) {
    try {
      const hashPassword = HashService.getHash(password);
      const activationLink = this._generateActivationLink();
      await this._controller.addUser(
        name, email, hashPassword, activationLink);
      MailService.sendActivationMail(email, activationLink);
      const user = await this._controller.findUserByEmail(email);
      return await this.generateTokens(new UserDTO(user));
    } catch (e) {
      if (e instanceof UserError) {
        if (e.causeField === "email") {
          throw ApiError.BadRequestError("Email already taken");
        } else {
          throw ApiError.BadRequestError("Incorrect input");
        }
      }
      if (e instanceof Error) throw e;
    }
  }

  async activation(activationLink: string) {
    try {
      const user = await this._controller.findUserByActivationLink(
        activationLink);
      await this._controller.activateUser(user.user_id);
    } catch (e) {
      if (e instanceof UserError) {
        throw ApiError.BadRequestError("Incorrect activation link");
      }
      if (e instanceof Error) throw e;
    }
  }

  async login(email: string, password: string) {
    try {
      const user = await this._controller.findUserByEmail(email);
      if (!HashService.checkHash(password, user.password)) {
        throw ApiError.BadRequestError("Incorrect email or password");
      }
      return this.generateTokens(new UserDTO(user));
    } catch (e) {
      if (e instanceof UserError) {
        throw ApiError.BadRequestError("Incorrect email or password");
      }
      if (e instanceof Error) throw e;
    }
  }

  async logout(refreshToken: string) {
    await TokenService.removeRefreshToken(refreshToken);
  }

  async refresh(refreshToken: string) {
    const userData = TokenService.validateRefreshToken(
      refreshToken) as UserDTO;
    if (!userData) throw AuthError.UnauthorizedError();
    try {
      const tokenInDB = await TokenService.findTokenInDB(refreshToken);
      const user = await this._controller.findUserById(userData.id);
      return this.generateTokens(new UserDTO(user), refreshToken);
    } catch (e) {
      if (e instanceof TokenError || e instanceof UserError) {
        throw AuthError.UnauthorizedError();
      }
      if (e instanceof Error) throw e;
    }
  }
}

export default new UserService()