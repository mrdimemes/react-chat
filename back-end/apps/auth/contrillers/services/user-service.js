import userController from "./../../../mysql-connector/controllers/user-controller.js";
import { v4 } from "uuid";


class UserService {
  _controller;
  _getActivationLink;

  constructor() {
    this._controller = userController;
    this._getActivationLink = v4;
  }

  async registration(name, email, password) {
    const candidate = await this._controller.findUserByEmail(email);
    if (candidate.length) {
      throw Error(`Email already taken: ${email}`);
    }
    const activationLink = this._getActivationLink();
    await this._controller.addUser(name, email, password, activationLink);
  }
}

export default new UserService()