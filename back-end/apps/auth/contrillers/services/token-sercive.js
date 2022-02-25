import "dotenv/config";
import Jwt from "jsonwebtoken";
import TokenController from "./../../../mysql-connector/controllers/token-controller.js";


class TokenService {
  _jwt;
  _controller;

  constructor() {
    this._jwt = Jwt;
    this._controller = TokenController;
  }

  generateTokens(payload) {
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
    return {
      accessToken,
      refreshToken
    }
  }
}

export default new TokenService()