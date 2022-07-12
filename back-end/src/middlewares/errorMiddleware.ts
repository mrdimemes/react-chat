import { Request, Response } from "express";
import { CustomError, ConfigError } from "../exceptions";

function errorMiddleware(
  err: CustomError | Error, req: Request, res: Response, next: Function
) {
  console.log(err);

  if (err instanceof ConfigError) {
    return res.status(500).json({
      massage: "Something broke, beep-boop..."
    });
  }
  if (err instanceof CustomError) {
    return res.status(err.status).json({
      massage: err.message,
      errors: err.errors
    });
  }
  return res.status(500).json({ massage: "Something broke, beep-boop..." })
}

export default errorMiddleware;