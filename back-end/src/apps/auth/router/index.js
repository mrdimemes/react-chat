import { Router } from "express";
import userController from "../contrillers/user-controller.js";
import { body } from "express-validator";


const router = Router();

router.post(
  "/registration",
  body("email").isEmail(),
  body("password").isLength({ min: 6 }),
  userController.registration
);

router.post("/login", userController.login);
router.post("/logout", userController.logout);
router.get("/activate/:link", userController.activate);
router.get("/refresh", userController.refresh);

export default router;