import HashService from "./services/hash-service.js";
import MailService from "./services/hash-service.js";
import TokenService from "./services/hash-service.js";
import UserService from "./services/hash-service.js";



class UserController {
  _hashes;
  _mails;
  _tokens;
  _users;

  constructor() {
    this._hashes = HashService;
    this._mails = MailService;
    this._tokens = TokenService;
    this._users = UserService;
  }

  async registration(req, res, next) {
    try {
      // const hashPassword = this._hash.getHash(password);
      
    } catch (error) {
      
    }
  }

  async login(req, res, next) {
    try {
      res.json(["1"])
    } catch (error) {
      
    }
  }

  async logout(req, res, next) {
    try {
      
    } catch (error) {
      
    }
  }

  async activate(req, res, next) {
    try {
      
    } catch (error) {
      
    }
  }

  async refresh(req, res, next) {
    try {
      
    } catch (error) {
      
    }
  }
}

export default new UserController();