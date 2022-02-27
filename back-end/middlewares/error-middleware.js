import AuthError from "../apps/auth/exceptions/auth-error.js";


function errorMiddleware(err, req, res, next) {
  console.log(err);

  if (err instanceof AuthError) {
    return res.status(err.status).json({
      massage: err.message,
      errors: err.errors
    });
  }

  return res.status(500).json({ massage: "Unexpected error" })
}


export default errorMiddleware;