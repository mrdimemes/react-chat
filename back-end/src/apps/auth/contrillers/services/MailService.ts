import dotenv from "dotenv";
import nodemailer from "nodemailer";
import { ConfigError } from "../../../../exceptions";
import { MailError } from "../../exceptions";

dotenv.config();

class MailService {
  _transporter;
  activationURL: string;

  constructor() {
    if (process.env.SMTP_HOST === undefined) {
      throw ConfigError.EnvironmentError("SMTP_HOST is undefined.");
    }
    if (process.env.SMTP_USER === undefined) {
      throw ConfigError.EnvironmentError("SMTP_USER is undefined.");
    }
    if (process.env.SMTP_PASSWORD === undefined) {
      throw ConfigError.EnvironmentError("SMTP_PASSWORD is undefined.");
    }
    if (process.env.API_URL === undefined) {
      throw ConfigError.EnvironmentError("API_URL is undefined.");
    }
    if (process.env.AUTH_PATH === undefined) {
      throw ConfigError.EnvironmentError("AUTH_PATH is undefined.");
    }

    this.activationURL = process.env.API_URL + process.env.AUTH_PATH +
      "/activate/";

    try {
      this._transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: 465,
        secure: true,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASSWORD
        }
      })
    } catch (e) {
      if (e instanceof Error) throw MailError.TransportError(e);
    }
  }

  async sendActivationMail(to: string, link: string) {
    try {
      await this._transporter?.sendMail({
        from: `React-Chat <${process.env.SMTP_USER}>`,
        to: to,
        subject: "Accaunt activation: " + process.env.API_URL,
        text: "",
        html:
          `
            <div>
              <h1>To activate your account follow the link</h1>
              <a href="${this.activationURL + link}">${this.activationURL}</a>
            </div>
          `
      });
    } catch (e) {
      if (e instanceof Error) throw MailError.SendMessageError(e);
    }
  }
}

export default new MailService()