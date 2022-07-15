import dotenv from "dotenv";
import crypto from "crypto";
import { ConfigError } from "../../../../exceptions";

dotenv.config();

class HashService {
  _crypto: typeof crypto;

  constructor() {
    this._crypto = crypto;
  }

  getHash(plainText: string) {
    const salt: string | undefined = process.env.SALT;
    if (salt === undefined) {
      throw ConfigError.EnvironmentError("SALT is undefined, can't get hash.");
    }
    return this._crypto.createHmac("sha256", salt).update(
      plainText).digest("base64");
  }

  checkHash(plainText: string, hash: string) {
    return this.getHash(plainText) === hash;
  }
}

export default new HashService()