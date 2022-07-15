import { CustomError } from "../../../exceptions";

class MailError extends CustomError {
  constructor(status: number, code: string, massage: string, errors: Error) {
    super(status, code, massage, errors);
  }

  static TransportError(errors: Error) {
    return new MailError(
      500, "CREATE_TRANSPORT_ERR", "Failed to create Transport.", errors);
  }

  static SendMessageError(errors: Error) {
    return new MailError(
      500, "SEND_MSG_ERR", "Failed to send e-mail.", errors);
  }
}

export default MailError;