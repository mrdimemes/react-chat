import connector from "../index.js"

class UserController {
  _connector = connector;

  async addUser(name, email, password) {
    const sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
    await this._connector.query(sql, [name, email, password]);
  }

  async findUserByEmail(email) {
    const sql = "SELECT * FROM users WHERE email = ?";
    return await this._connector.query(sql, [email]);
  }

  async findUserById(id) {
    const sql = "SELECT * FROM users WHERE id = ?";
    return await this._connector.query(sql, [id]);
  }

  async removeUser(id) {
    const sql = "DELETE FROM users WHERE id = ?";
    await this._connector.query(sql, [id]);
  }
}


export default new UserController();