import { CustomError } from "./";

class ConfigError extends CustomError {
  constructor(status: number, massage: string, errors = []) {
    super(status, massage, errors);
  }

  static EnvironmentError(massage: string, errors = []) {
    return new ConfigError(500, massage, errors);
  }
}

export default ConfigError;