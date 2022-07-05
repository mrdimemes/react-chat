import "dotenv/config";
import connector from "../index.js";

class TokenController {
  _connector = connector;

  async addToken(user_id, refresh_token, browser) {
    const sql = "INSERT INTO tokens (user_id, refresh_token, browser) VALUES (?, ?, ?)";
    await this._connector.query(sql, [user_id, refresh_token, browser]);
  }

  async findToken(refresh_token) {
    const sql = "SELECT * FROM tokens WHERE refresh_token = ?";
    return await this._connector.query(sql, [refresh_token]);
  }

  async removeAllTokens(user_id) {
    const sql = "DELETE FROM tokens WHERE user_id = ?";
    await this._connector.query(sql, [user_id]);
  }

  async removeToken(user_id, browser) {
    const sql = "DELETE FROM tokens WHERE user_id = ? AND browser = ?";
    await this._connector.query(sql, [user_id, browser]);
  }

  async removeTokenByValue(token) {
    const sql = "DELETE FROM tokens WHERE refresh_token = ?";
    await this._connector.query(sql, [token]);
  }

  async removeExpiredTokens(user_id) {
    const sql = "DELETE FROM tokens WHERE user_id = ? AND DATEDIFF(CURRENT_DATE, upload_date) > ?";
    await this._connector.query(
      sql,
      [user_id, process.env.JWT_REFRESH_LIFETIME]
    );
  }

  async removeAllExpiredTokens() {
    const sql = "DELETE FROM tokens WHERE DATEDIFF(CURRENT_DATE, upload_date) > ?";
    await this._connector.query(sql, [process.env.JWT_REFRESH_LIFETIME]);
  }
}


export default new TokenController();