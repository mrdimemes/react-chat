import { CustomError } from "./";

class ConfigError extends CustomError {
  constructor(status: number, massage: string, errors?: Error) {
    super(status, massage, errors);
  }

  static EnvironmentError(massage: string, errors?: Error) {
    return new ConfigError(500, "Environment error: " + massage, errors);
  }
}

export default ConfigError;