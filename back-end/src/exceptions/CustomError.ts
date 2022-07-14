class CustomError extends Error {
  status: number;
  errors: object[] | Error | CustomError | undefined;

  constructor(
    status: number,
    massage: string,
    errors: object[] | Error | CustomError | undefined
  ) {
    super(massage);
    this.status = status;
    this.errors = errors;
  }
}

export default CustomError;