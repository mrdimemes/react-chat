class ConfigError extends Error {
  status;
  errors;

  constructor(status, massage, errors = []) {
    super(massage);
    this.status = status;
    this.errors = errors;
  }

  static EnvironmentError(massage, errors = []) {
    return new ConfigError(500, massage, errors);
  }
}


export default ConfigError;