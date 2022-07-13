class CustomError extends Error {
  status: number;
  errors: Array<any>;

  constructor(status: number, massage: string, errors: Array<any> = []) {
    super(massage);
    this.status = status;
    this.errors = errors;
  }
}

export default CustomError;