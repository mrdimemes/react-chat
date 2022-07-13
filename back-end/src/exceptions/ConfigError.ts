import { CustomError } from "./";

class ConfigError extends CustomError {
  constructor(status: number, massage: string, errors: Array<any> = []) {
    super(status, massage, errors);
  }

  static EnvironmentError(massage: string, errors: Array<any> = []) {
    return new ConfigError(500, "EnvironmentError: " + massage, errors);
  }
}

export default ConfigError;