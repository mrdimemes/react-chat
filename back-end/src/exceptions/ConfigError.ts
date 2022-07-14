import { CustomError } from "./";

class ConfigError extends CustomError {
  constructor(status: number, massage: string, errors: Error | undefined) {
    super(status, massage, errors);
  }

  static EnvironmentError(
    massage: string,
    errors: Error | undefined = undefined
  ) {
    return new ConfigError(500, "Environment error: " + massage, errors);
  }
}

export default ConfigError;