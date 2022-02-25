import "dotenv/config";
import connector from "../index.js";

class TokenController {
  _connector = connector;

  async addToken(user_id, refresh_token, browser) {
    const sql = "INSERT INTO tokens (user_id, refresh_token, browser) VALUES (?, ?, ?)";
    await this._connector.query(sql, [user_id, refresh_token, browser]);
  }


  async removeAllTokens(user_id) {
    const sql = "DELETE FROM tokens WHERE user_id = ?";
    await this._connector.query(sql, [user_id]);
  }

  async removeToken(user_id, browser) {
    const sql = "DELETE FROM tokens WHERE user_id = ? AND browser = ?";
    await this._connector.query(sql, [user_id, browser]);
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