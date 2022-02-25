import "dotenv/config";
import Jwt from "jsonwebtoken";


class TokenService {
  _jwt;

  constructor() {
    this._jwt = Jwt;
  }

  generateTokens(payload) {
    const accessToken = this._jwt.sign(
      payload,
      process.env.JWT_ACCESS_SERCRET,
      { expiresIn: "30m" }
    );
    const refreshToken = this._jwt.sign(
      payload,
      process.env.JWT_REFRESH_SERCRET,
      { expiresIn: "30d" }
    );
    return {
      accessToken,
      refreshToken
    }
  }
}

export default new TokenService()