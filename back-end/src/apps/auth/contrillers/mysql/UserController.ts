import MySQLConnector from "../../../mysql-connector";
import { MySQLError } from "../../../mysql-connector/exceptions";
import { UserError } from "../../exceptions";
import { UserModel } from "../../models";
import { ResultSetHeader } from "mysql2/promise";

class UserController {
  _connector = MySQLConnector;

  async addUser(
    name: string, email: string, password: string, activationLink: string
  ) {
    try {
      const sql = "INSERT INTO users " +
        "(name, email, password, activation_link) " +
        "VALUES (?, ?, ?, ?)";
      await this._connector.query(sql,
        [name, email, password, activationLink]);
    } catch (e) {
      if (e instanceof MySQLError) {
        switch (e.code) {
          case "ER_DUP_ENTRY":
            throw UserError.UserAddingError(
              `User with e-mail: ${email} already exists.`,
              undefined, "email"
            );
          case "ERR_INVALID_ARG_TYPE":
            throw UserError.UserAddingError(
              "Invalid fields.");
        }
      }
      if (e instanceof Error) throw e;
    }
  }

  async findUserByEmail(email: string): Promise<UserModel> {
    const sql = "SELECT * FROM users WHERE email = ?";
    const result = await this._connector.query(sql, [email]) as UserModel[];
    if (result.length === 0) {
      throw UserError.UserNotFound(`Wrong e-mail: ${email}.`);
    }
    return result[0];
  }

  async findUserById(id: number): Promise<UserModel> {
    const sql = "SELECT * FROM users WHERE user_id = ?";
    const result = await this._connector.query(sql, [id]) as UserModel[];
    if (result.length === 0) {
      throw UserError.UserNotFound(`Wrong id: ${id}.`);
    }
    return result[0];
  }

  async findUserByActivationLink(activationLink: string): Promise<UserModel> {
    const sql = "SELECT * FROM users WHERE activation_link = ?";
    const result = await this._connector.query(
      sql, [activationLink]) as UserModel[];
    if (result.length === 0) {
      throw UserError.UserNotFound(
        `Wrong activation link: ${activationLink}.`
      );
    }
    return result[0];
  }

  async removeUser(id: number) {
    const resultHeader: ResultSetHeader = await this._connector.query(
      "DELETE FROM users WHERE user_id = ?", [id]) as ResultSetHeader;
    if (resultHeader.affectedRows === 0) {
      UserError.UserNotFound(
        `Failed to remove user with id: ${id}, 
        there is no such id in the database.`
      );
    }
  }

  async activateUser(id: number) {
    const resultHeader: ResultSetHeader = await this._connector.query(
      "UPDATE users SET is_activated = 1 WHERE user_id = ?", [id]
    ) as ResultSetHeader;
    if (resultHeader.affectedRows === 0) {
      UserError.UserNotFound(
        `Failed to activate user with id: ${id}, 
        there is no such id in the database.`
      );
    }
  }
}

export default new UserController();