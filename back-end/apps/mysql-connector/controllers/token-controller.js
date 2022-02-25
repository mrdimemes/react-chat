import connector from "../index.js"

class TokenController {
  _connector = connector;

  async addToken(user_id, refresh_token) {
    const sql = "INSERT INTO tokens (user_id, refresh_token) VALUES (?, ?)";
    await this._connector.query(sql, [user_id, refresh_token]);
  }

  async removeAllTokens(user_id) {
    const sql = "DELETE FROM tokens WHERE user_id = ?";
    await this._connector.query(sql, [user_id]);
  }
}


export default new TokenController();