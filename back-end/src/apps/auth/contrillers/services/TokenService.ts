import dotenv from "dotenv";
import Jwt from "jsonwebtoken";
import TokenController from "../mysql/TokenController";
import { ConfigError } from "../../../../exceptions";

dotenv.config();

class TokenService {
  _jwt;
  _controller;

  constructor() {
    this._jwt = Jwt;
    this._controller = TokenController;
  }

  generateTokens(payload: Object) {
    if (process.env.JWT_ACCESS_SERCRET === undefined) {
      throw ConfigError.EnvironmentError("JWT_ACCESS_SERCRET is undefined.");
    }
    if (process.env.JWT_REFRESH_SERCRET === undefined) {
      throw ConfigError.EnvironmentError("JWT_REFRESH_SERCRET is undefined.");
    }
    if (process.env.JWT_ACCESS_LIFETIME === undefined) {
      throw ConfigError.EnvironmentError("JWT_ACCESS_LIFETIME is undefined.");
    }
    if (process.env.JWT_REFRESH_LIFETIME === undefined) {
      throw ConfigError.EnvironmentError("JWT_REFRESH_LIFETIME is undefined.");
    }
    const accessToken = this._jwt.sign(
      payload,
      process.env.JWT_ACCESS_SERCRET,
      { expiresIn: `${process.env.JWT_ACCESS_LIFETIME}m` }
    );
    const refreshToken = this._jwt.sign(
      payload,
      process.env.JWT_REFRESH_SERCRET,
      { expiresIn: `${process.env.JWT_REFRESH_LIFETIME}d` }
    );
    return { accessToken, refreshToken }
  }

  async saveRefreshToken(userId: number, newToken: string, oldToken?: string) {
    if (oldToken) {
      await this.removeRefreshToken(oldToken);
    }
    await this._controller.addToken(userId, newToken);
  }

  async removeRefreshToken(token: string) {
    await this._controller.removeTokenByValue(token);
  }

  validateAccessToken(token: string) {
    if (process.env.JWT_ACCESS_SERCRET === undefined) {
      throw ConfigError.EnvironmentError("JWT_ACCESS_SERCRET is undefined.");
    }
    return this._jwt.verify(token, process.env.JWT_ACCESS_SERCRET);
  }

  validateRefreshToken(token: string) {
    if (process.env.JWT_REFRESH_SERCRET === undefined) {
      throw ConfigError.EnvironmentError("JWT_REFRESH_SERCRET is undefined.");
    }
    return this._jwt.verify(token, process.env.JWT_REFRESH_SERCRET);
  }

  async findTokenInDB(refreshToken: string) {
    return this._controller.findToken(refreshToken);
  }
}

export default new TokenService()