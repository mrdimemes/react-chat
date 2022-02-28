import AuthError from "../apps/auth/exceptions/auth-error.js";
import ApiError from "../exceptions/api-error.js";


function errorMiddleware(err, req, res, next) {
  console.log(err);

  if (err instanceof AuthError) {
    return res.status(err.status).json({
      massage: err.message,
      errors: err.errors
    });
  } else if (err instanceof ApiError) {
    return res.status(err.status).json({
      massage: err.message,
      errors: err.errors
    });
  }

  return res.status(500).json({ massage: "Unexpected error" })
}


export default errorMiddleware;