class MySQLError extends Error {
  status;
  errors;

  constructor(status, massage, errors = []) {
    super(massage);
    this.status = status;
    this.errors = errors;
  }
}


export default MySQLError;