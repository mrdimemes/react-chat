import 'dotenv/config';
import crypto from 'crypto';


class HashService {
  _crypto;

  constructor() {
    this._crypto = crypto;
  }

  getHash(msg) {
    const salt = process.env.SALT;
    if (!salt) {
      throw Error("Salt not found");
    }
    return this._crypto.createHmac("sha256", salt).update(msg).digest("base64");
  }

  checkHash(msg, hash) {
    return this.getHash(msg) === hash;
  }
}


export default new HashService()