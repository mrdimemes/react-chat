class CustomError extends Error {
  status: number;
  errors?: object[] | Error;

  constructor(status: number, massage: string, errors?: object[] | Error) {
    super(massage);
    this.status = status;
    this.errors = errors;
  }
}

export default CustomError;