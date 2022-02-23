import connector from "../index.js"

class UserController {
  _connector = connector;

  async addUser(name, email, password) {
    const sql = "INSERT INTO users(name, email, password) VALUES (?, ?, ?)"
    this._connector.query(sql, [name, email, password]);
  }


  async findUserByEmail(email) {}
  async findUserById(id) {}

  async removeUser(id) {}
}


export default new UserController();