class CustomError extends Error {
  status: number;
  code: string;
  errors?: object[] | Error;

  constructor(
    status: number, code: string, massage: string, errors?: object[] | Error
  ) {
    super(massage);
    this.status = status;
    this.code = code;
    this.errors = errors;
  }
}

export default CustomError;