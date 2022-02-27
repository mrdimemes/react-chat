import "dotenv/config";
import nodemailer from "nodemailer";


class MailService {

  _transporter;

  constructor() {
    this._transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD
      }
    })
  }

  async sendActivationMail(to, link) {
    const activationURL = process.env.API_URL +
      process.env.AUTH_PATH +
      "/activate/"
      + link;
    await this._transporter.sendMail({
      from: process.env.SMTP_USER,
      to: to,
      subject: "Accaunt activation: " + process.env.API_URL,
      text: "",
      html: 
        `
          <div>
            <h1>To activate your account follow the link</h1>
            <a href="${activationURL}">${activationURL}</a>
          </div>
        `
    });
  }
}

export default new MailService()