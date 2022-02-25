import userController from "../../..mysql-connector/controllers/user-controller.js";
import hashService from "./hash-service.js";


class UserService {
  _controller;
  _hash;

  constructor() {
    this._controller = userController;
    this._hash = hashService;
  }

  async registration(name, email, password) {
    const candidate = await this._controller.findUserByEmail(email);
    if (candidate) {
      throw Error(`Email already taken: ${email}`);
    }
    const hashPassword = this._hash.getHash(password);
    this._controller.addUser(name, email, hashPassword);
  }
}

export default new UserService()