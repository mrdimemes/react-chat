import userController from "./../../../mysql-connector/controllers/user-controller.js";
import hashService from "./hash-service.js";
import { v4 } from "uuid";


class UserService {
  _controller;
  _hash;
  _getActivationLink;

  constructor() {
    this._controller = userController;
    this._hash = hashService;
    this._getActivationLink = v4;
  }

  async registration(name, email, password) {
    const candidate = await this._controller.findUserByEmail(email);
    if (candidate.length) {
      throw Error(`Email already taken: ${email}`);
    }
    const hashPassword = this._hash.getHash(password);
    const activationLink = this._getActivationLink();
    this._controller.addUser(name, email, hashPassword, activationLink);
  }
}

export default new UserService()