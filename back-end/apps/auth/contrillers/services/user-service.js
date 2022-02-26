import userController from "./../../../mysql-connector/controllers/user-controller.js";
import { v4 } from "uuid";
import hashService from "./hash-service.js";
import mailService from "./mail-service.js";
import tokenService from "./token-service.js";
import UserDTO from "../../DTOs/user-dto.js";

class UserService {
  _controller;
  _getActivationLink;

  constructor() {
    this._controller = userController;
    this._getActivationLink = v4;
  }

  async registration(name, email, password, browser) {
    const hashPassword = hashService.getHash(password);
    const activationLink = this._getActivationLink();
    await this._controller.addUser(name, email, hashPassword, activationLink);
    await mailService.sendActivationMail(email, activationLink);
    const user = await this._controller.findUserByEmail(email);
    const userDTO = new UserDTO(user[0]);
    const tokens = tokenService.generateTokens({ ...userDTO });
    await tokenService.saveRefreshToken(
      user[0].user_id,
      tokens.refreshToken,
      browser
    );
    return { ...tokens, user: userDTO };
  }
}

export default new UserService()