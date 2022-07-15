import dotenv from "dotenv";
import MySQLConnector from "../../../mysql-connector";
import { MySQLError } from "../../../mysql-connector/exceptions";
import { TokenError } from "../../exceptions";
import { TokenModel } from "../../models";
import { ResultSetHeader } from "mysql2/promise";

dotenv.config();

class TokenController {
  _connector = MySQLConnector;
  jwtRefreshLifetime = Number(process.env.JWT_REFRESH_LIFETIME) || 30;

  async addToken(userId: number, refreshToken: string) {
    try {
      const sql = "INSERT INTO tokens (user_id, refresh_token) VALUES (?, ?)";
      await this._connector.query(sql, [userId, refreshToken]);
    } catch (e) {
      if (e instanceof MySQLError && e.code === "ERR_INVALID_ARG_TYPE") {
        throw TokenError.TokenAddingError("Invalid fields.");
      }
      if (e instanceof Error) throw e;
    }
  }

  async findToken(refreshToken: string): Promise<TokenModel> {
    const sql = "SELECT * FROM tokens WHERE refresh_token = ?";
    const result = await this._connector.query(
      sql, [refreshToken]) as TokenModel[];
    if (result.length === 0) {
      throw TokenError.TokenNotFound(`Wrong token: ${refreshToken}.`);
    }
    return result[0];
  }

  async removeAllUserTokens(userId: number) {
    const sql = "DELETE FROM tokens WHERE user_id = ?";
    const resultHeader: ResultSetHeader = await this._connector.query(
      sql, [userId]) as ResultSetHeader;
    if (resultHeader.affectedRows === 0) {
      TokenError.TokenNotFound(
        `Failed to remove tokens of user with id: ${userId}, 
        there are no such tokens in the database.`
      );
    }
  }

  async removeTokenByValue(token: string) {
    const sql = "DELETE FROM tokens WHERE refresh_token = ?";
    const resultHeader: ResultSetHeader = await this._connector.query(
      sql, [token]) as ResultSetHeader;
    if (resultHeader.affectedRows === 0) {
      TokenError.TokenNotFound(
        `Failed to remove token: ${token}, 
        there is no such token in the database.`
      );
    }
  }

  async removeExpiredTokens(userId: number) {
    const sql = "DELETE FROM tokens " +
      "WHERE user_id = ? AND DATEDIFF(CURRENT_DATE, upload_date) > ?";
    await this._connector.query(sql, [userId, this.jwtRefreshLifetime]);
  }

  async removeAllExpiredTokens() {
    const sql = "DELETE FROM tokens " +
      "WHERE DATEDIFF(CURRENT_DATE, upload_date) > ?";
    await this._connector.query(sql, [this.jwtRefreshLifetime]);
  }
}

export default new TokenController();