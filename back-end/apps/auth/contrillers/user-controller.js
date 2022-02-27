import "dotenv/config";
import userService from "./services/user-service.js";


class UserController {
  async registration(req, res, next) {
    try {
      const { name, email, password, browser } = req.body;
      const userData = await userService.registration(
        name, email, password, browser
      );
      res.cookie(
        "refreshToken",
        userData.refreshToken,
        {
          maxAge: process.env.JWT_REFRESH_LIFETIME * 24 * 60 * 60 * 1000,
          httpOnly: true
        }
      );
      return res.json(userData);
    } catch (error) {
      console.log(error);
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
      const activationLink = req.params.link;
      await userService.activation(activationLink);
      res.redirect(process.env.CLIENT_URL);
    } catch (error) {
      console.log(error);
    }
  }

  async refresh(req, res, next) {
    try {

    } catch (error) {

    }
  }
}

export default new UserController();