import { CustomError } from "./";

class ConfigError extends CustomError {
  constructor(status: number, code: string, massage: string, errors?: Error) {
    super(status, code, massage, errors);
  }

  static EnvironmentError(massage: string, errors?: Error) {
    return new ConfigError(
      500, "ENVIRONMENT_ERR", "Environment error: " + massage, errors
    );
  }
}

export default ConfigError;