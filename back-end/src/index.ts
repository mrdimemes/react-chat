import dotenv from "dotenv";
import express, { Express } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import errorMiddleware from "./middlewares/errorMiddleware";
// import authRouter from "./apps/auth/router/index.js";
import { ConfigError } from "./exceptions";

dotenv.config();

const PORT: number = Number(process.env.PORT) || 5000;
const CLIENT_URL: string | undefined = process.env.CLIENT_URL;
const AUTH_PATH: string | undefined = process.env.AUTH_PATH;

if (CLIENT_URL === undefined) {
  throw ConfigError.EnvironmentError("CLIENT_URL is undefined.");
}
if (AUTH_PATH === undefined) {
  throw ConfigError.EnvironmentError("AUTH_PATH is undefined.");
}

const app: Express = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  credentials: true,
  origin: CLIENT_URL
}));
// app.use(AUTH_PATH, authRouter);
app.use(errorMiddleware);

const startListening = async () => {
  try {
    app.listen(PORT, () => console.log(`Listening PORT ${PORT}`))
  } catch (error) {
    console.log(error);
  }
}

startListening();