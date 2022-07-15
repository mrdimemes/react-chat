import dotenv from "dotenv";
import { Router } from "express";
import AuthController from "../contrillers/AuthController";
import { body } from "express-validator";

dotenv.config();

const router = Router();

router.post(
  "/registration",
  body("email").isEmail(),
  body("email").isLength({ max: Number(process.env.MAX_EMAIL_LENGTH) }),
  body("password").isLength({
    min: Number(process.env.MIN_PASSWORD_LENGTH),
    max: Number(process.env.MAX_PASSWORD_LENGTH)
  }),
  body("password").isAscii(),
  body("name").isLength({
    min: Number(process.env.MIN_NAME_LENGTH),
    max: Number(process.env.MAX_NAME_LENGTH)
  }),
  body("name").isAscii(),
  AuthController.registration
);

router.post("/login", AuthController.login);
router.post("/logout", AuthController.logout);
router.get("/activate/:link", AuthController.activate);
router.get("/refresh", AuthController.refresh);

export default router;