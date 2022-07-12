class CustomError extends Error {
  status: number;
  errors: Array<string>;

  constructor(status: number, massage: string, errors = []) {
    super(massage);
    this.status = status;
    this.errors = errors;
  }
}

export default CustomError;